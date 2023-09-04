import { j as get_store_value, o as onDestroy, s as setContext, k as getContext, c as create_ssr_component, d as subscribe, g as add_attribute, h as escape, l as is_promise, n as noop, a as compute_rest_props, b as spread, e as escape_object, v as validate_component } from "./ssr.js";
import { d as derived, w as writable, r as readable } from "./index2.js";
import "./index.js";
import { p as page } from "./stores.js";
import { t as tick } from "./index3.js";
import { b as splitPath, t as traversePath, m as mapErrors, e as errorShape, c as traversePathsAsync, d as traversePaths, f as setPaths, g as clone$1, S as SuperFormError, h as clearErrors, i as isInvalidPath, p as parse, j as mergePath, k as comparePaths, l as flattenErrors, n as pathExists } from "./schemas.js";
import { B as BROWSER } from "./prod-ssr.js";
import { b as stringify } from "./stringify.js";
const browser = BROWSER;
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const invalidateAll = /* @__PURE__ */ client_method("invalidate_all");
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
function formFieldProxy(form, path) {
  const path2 = splitPath(path);
  const constraintsPath = path2.filter((p) => isNaN(parseInt(String(p)))).join(".");
  return {
    path,
    value: fieldProxy(form.form, path),
    errors: fieldProxy(form.errors, path),
    constraints: fieldProxy(form.constraints, constraintsPath)
  };
}
function fieldProxy(form, path) {
  const path2 = splitPath(path);
  const proxy = derived(form, ($form) => {
    const data = traversePath($form, path2);
    return data?.value;
  });
  return {
    subscribe(...params) {
      const unsub = proxy.subscribe(...params);
      return () => {
        unsub();
      };
    },
    //subscribe: proxy.subscribe,
    update(upd) {
      form.update((f) => {
        const output = traversePath(f, path2);
        if (output)
          output.parent[output.key] = upd(output.value);
        return f;
      });
    },
    set(value) {
      form.update((f) => {
        const output = traversePath(f, path2);
        if (output)
          output.parent[output.key] = value;
        return f;
      });
    }
  };
}
async function clientValidation(options, checkData, formId, constraints, posted) {
  return _clientValidation(options.validators, checkData, formId, constraints, posted);
}
async function _clientValidation(validators, checkData, formId, constraints, posted) {
  let valid = true;
  let clientErrors = {};
  if (validators) {
    if ("safeParseAsync" in validators) {
      const validator = validators;
      const result = await validator.safeParseAsync(checkData);
      valid = result.success;
      if (!result.success) {
        clientErrors = mapErrors(
          result.error.format(),
          errorShape(validator)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        );
      }
    } else {
      checkData = { ...checkData };
      for (const [key, value] of Object.entries(validators)) {
        if (typeof value === "function" && !(key in checkData)) {
          checkData[key] = void 0;
        }
      }
      const validator = validators;
      const newErrors = [];
      await traversePathsAsync(checkData, async ({ value, path }) => {
        const validationPath = path.filter((p) => isNaN(parseInt(p)));
        const maybeValidator = traversePath(validator, validationPath);
        if (typeof maybeValidator?.value === "function") {
          const check = maybeValidator.value;
          let errors;
          if (Array.isArray(value)) {
            for (const key in value) {
              try {
                errors = await check(value[key]);
                if (errors) {
                  valid = false;
                  newErrors.push({
                    path: path.concat([key]),
                    errors: typeof errors === "string" ? [errors] : errors ?? void 0
                  });
                }
              } catch (e) {
                valid = false;
                console.error(`Error in form validators for field "${path}":`, e);
              }
            }
          } else {
            try {
              errors = await check(value);
              if (errors) {
                valid = false;
                newErrors.push({
                  path,
                  errors: typeof errors === "string" ? [errors] : errors ?? void 0
                });
              }
            } catch (e) {
              valid = false;
              console.error(`Error in form validators for field "${path}":`, e);
            }
          }
        }
      });
      for (const { path, errors } of newErrors) {
        const errorPath = traversePath(clientErrors, path, ({ parent, key, value }) => {
          if (value === void 0)
            parent[key] = {};
          return parent[key];
        });
        if (errorPath) {
          const { parent, key } = errorPath;
          parent[key] = errors;
        }
      }
    }
  }
  return {
    valid,
    posted,
    errors: clientErrors,
    data: checkData,
    constraints,
    message: void 0,
    id: formId
  };
}
async function validateObjectErrors(formOptions, data, Errors) {
  if (typeof formOptions.validators !== "object" || !("safeParseAsync" in formOptions.validators)) {
    return;
  }
  const validators = formOptions.validators;
  const result = await validators.safeParseAsync(data);
  if (!result.success) {
    const newErrors = mapErrors(result.error.format(), errorShape(validators));
    Errors.update((currentErrors) => {
      traversePaths(currentErrors, (pathData) => {
        if (pathData.key == "_errors") {
          return pathData.set(void 0);
        }
      });
      traversePaths(newErrors, (pathData) => {
        if (pathData.key == "_errors") {
          return setPaths(currentErrors, [pathData.path], pathData.value);
        }
      });
      return currentErrors;
    });
  } else {
    Errors.update((currentErrors) => {
      traversePaths(currentErrors, (pathData) => {
        if (pathData.key == "_errors") {
          return pathData.set(void 0);
        }
      });
      return currentErrors;
    });
  }
}
async function validateField(path, formOptions, data, Errors, Tainted, options = {}) {
  function Errors_clear() {
    clearErrors(Errors, { undefinePath: path, clearFormLevelErrors: true });
  }
  function Errors_update(errorMsgs) {
    if (typeof errorMsgs === "string")
      errorMsgs = [errorMsgs];
    if (options.update === true || options.update == "errors") {
      Errors.update((errors2) => {
        const error = traversePath(errors2, path, (node) => {
          if (isInvalidPath(path, node)) {
            throw new SuperFormError("Errors can only be added to form fields, not to arrays or objects in the schema. Path: " + node.path.slice(0, -1));
          } else if (node.value === void 0) {
            node.parent[node.key] = {};
            return node.parent[node.key];
          } else {
            return node.value;
          }
        });
        if (!error)
          throw new SuperFormError("Error path could not be created: " + path);
        error.parent[error.key] = errorMsgs ?? void 0;
        return errors2;
      });
    }
    return errorMsgs ?? void 0;
  }
  const errors = await _validateField(path, formOptions.validators, data, Errors, Tainted, options);
  if (errors.validated) {
    if (errors.validated === "all" && !errors.errors) {
      Errors_clear();
    } else {
      return Errors_update(errors.errors);
    }
  } else if (errors.validated === false && formOptions.defaultValidator == "clear") {
    return Errors_update(void 0);
  }
  return errors.errors;
}
async function _validateField(path, validators, data, Errors, Tainted, options = {}) {
  if (options.update === void 0)
    options.update = true;
  if (options.taint === void 0)
    options.taint = false;
  if (typeof options.errors == "string")
    options.errors = [options.errors];
  const Context = {
    value: options.value,
    shouldUpdate: true,
    currentData: void 0,
    // Remove numeric indices, they're not used for validators.
    validationPath: path.filter((p) => isNaN(parseInt(p)))
  };
  async function defaultValidate() {
    return { validated: false, errors: void 0 };
  }
  function Tainted_isPathTainted(path2, tainted) {
    if (tainted === void 0)
      return false;
    const leaf = traversePath(tainted, path2);
    if (!leaf)
      return false;
    return leaf.value === true;
  }
  function Errors_update(updater) {
    Errors.update(updater);
  }
  function Errors_clearAll() {
    clearErrors(Errors, { undefinePath: null, clearFormLevelErrors: true });
  }
  function Errors_fromZod(errors, validator) {
    return mapErrors(errors.format(), errorShape(validator));
  }
  if (!("value" in options)) {
    Context.currentData = get_store_value(data);
    const dataToValidate = traversePath(Context.currentData, path);
    Context.value = dataToValidate?.value;
  } else if (options.update === true || options.update === "value") {
    data.update(($data) => {
      setPaths($data, [path], Context.value);
      return Context.currentData = $data;
    }, { taint: options.taint });
  } else {
    Context.shouldUpdate = false;
  }
  if (typeof validators !== "object") {
    return defaultValidate();
  }
  if ("safeParseAsync" in validators) {
    if (!Context.shouldUpdate) {
      Context.currentData = clone$1(Context.currentData ?? get_store_value(data));
      setPaths(Context.currentData, [path], Context.value);
    }
    const result = await validators.safeParseAsync(Context.currentData);
    if (!result.success) {
      const newErrors = Errors_fromZod(result.error, validators);
      if (options.update === true || options.update == "errors") {
        const taintedFields = get_store_value(Tainted);
        Errors_update((currentErrors) => {
          traversePaths(currentErrors, (pathData) => {
            if (pathData.key == "_errors") {
              return pathData.set(void 0);
            }
          });
          traversePaths(newErrors, (pathData) => {
            if (pathData.key == "_errors") {
              return setPaths(currentErrors, [pathData.path], pathData.value);
            }
            if (!Array.isArray(pathData.value))
              return;
            if (Tainted_isPathTainted(pathData.path, taintedFields)) {
              setPaths(currentErrors, [pathData.path], pathData.value);
            }
            return "skip";
          });
          return currentErrors;
        });
      }
      const current = traversePath(newErrors, path);
      return {
        validated: true,
        errors: options.errors ?? current?.value
      };
    } else {
      Errors_clearAll();
      return { validated: true, errors: void 0 };
    }
  } else {
    const validator = traversePath(validators, Context.validationPath);
    if (!validator) {
      throw new SuperFormError("No Superforms validator found: " + path);
    } else if (validator.value === void 0) {
      return defaultValidate();
    } else {
      const result = await validator.value(Context.value);
      return {
        validated: true,
        errors: result ? options.errors ?? result : result
      };
    }
  }
}
function applyAction(result) {
  {
    throw new Error("Cannot call applyAction(...) on the server");
  }
}
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function clone(element) {
  return (
    /** @type {T} */
    HTMLElement.prototype.cloneNode.call(element)
  );
}
function enhance(form_element, submit = () => {
}) {
  const fallback_callback = async ({ action, result, reset }) => {
    if (result.type === "success") {
      if (reset !== false) {
        HTMLFormElement.prototype.reset.call(form_element);
      }
      await invalidateAll();
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction();
    }
  };
  async function handle_submit(event) {
    const method = event.submitter?.hasAttribute("formmethod") ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formMethod
    ) : clone(form_element).method;
    if (method !== "post")
      return;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      event.submitter?.hasAttribute("formaction") ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : clone(form_element).action
    );
    const form_data = new FormData(form_element);
    const submitter_name = event.submitter?.getAttribute("name");
    if (submitter_name) {
      form_data.append(submitter_name, event.submitter?.getAttribute("value") ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      get data() {
        return form_data;
      },
      formData: form_data,
      get form() {
        return form_element;
      },
      formElement: form_element,
      submitter: event.submitter
    }) ?? fallback_callback;
    if (cancelled)
      return;
    let result;
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true"
        },
        cache: "no-store",
        body: form_data,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error")
        result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        error?.name === "AbortError"
      )
        return;
      result = { type: "error", error };
    }
    callback({
      action,
      get data() {
        return form_data;
      },
      formData: form_data,
      get form() {
        return form_element;
      },
      formElement: form_element,
      update: (opts) => fallback_callback({ action, result, reset: opts?.reset }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form_element, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form_element, "submit", handle_submit);
    }
  };
}
const isElementInViewport = (el, topOffset = 0) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= topOffset && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};
const scrollToAndCenter = (el, offset = 1.125, behavior = "smooth") => {
  const elementRect = el.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const top = absoluteElementTop - window.innerHeight / (2 * offset);
  window.scrollTo({ left: 0, top, behavior });
};
var FetchStatus;
(function(FetchStatus2) {
  FetchStatus2[FetchStatus2["Idle"] = 0] = "Idle";
  FetchStatus2[FetchStatus2["Submitting"] = 1] = "Submitting";
  FetchStatus2[FetchStatus2["Delayed"] = 2] = "Delayed";
  FetchStatus2[FetchStatus2["Timeout"] = 3] = "Timeout";
})(FetchStatus || (FetchStatus = {}));
const activeTimers = /* @__PURE__ */ new Set();
let _initialized = false;
function Form$1(formEl, timers, options) {
  let state = FetchStatus.Idle;
  let delayedTimeout, timeoutTimeout;
  let aboutToNavigate = false;
  const Timers = activeTimers;
  function Timers_start() {
    Timers_clear();
    Timers_setState(state != FetchStatus.Delayed ? FetchStatus.Submitting : FetchStatus.Delayed);
    delayedTimeout = window.setTimeout(() => {
      if (delayedTimeout && state == FetchStatus.Submitting)
        Timers_setState(FetchStatus.Delayed);
    }, options.delayMs);
    timeoutTimeout = window.setTimeout(() => {
      if (timeoutTimeout && state == FetchStatus.Delayed)
        Timers_setState(FetchStatus.Timeout);
    }, options.timeoutMs);
    Timers.add(Timers_clear);
  }
  function Timers_clear() {
    clearTimeout(delayedTimeout);
    clearTimeout(timeoutTimeout);
    delayedTimeout = timeoutTimeout = 0;
    Timers.delete(Timers_clear);
    Timers_setState(FetchStatus.Idle);
  }
  function Timers_clearAll() {
    Timers.forEach((t) => t());
    Timers.clear();
  }
  function Timers_setState(s) {
    state = s;
    timers.submitting.set(state >= FetchStatus.Submitting);
    timers.delayed.set(state >= FetchStatus.Delayed);
    timers.timeout.set(state >= FetchStatus.Timeout);
  }
  const ErrorTextEvents = formEl;
  function ErrorTextEvents__selectText(e) {
    const target = e.target;
    if (options.selectErrorText)
      target.select();
  }
  function ErrorTextEvents_addErrorTextListeners() {
    if (!options.selectErrorText)
      return;
    ErrorTextEvents.querySelectorAll("input").forEach((el) => {
      el.addEventListener("invalid", ErrorTextEvents__selectText);
    });
  }
  function ErrorTextEvents_removeErrorTextListeners() {
    if (!options.selectErrorText)
      return;
    ErrorTextEvents.querySelectorAll("input").forEach((el) => el.removeEventListener("invalid", ErrorTextEvents__selectText));
  }
  const Form2 = formEl;
  function Form_shouldAutoFocus(userAgent) {
    if (typeof options.autoFocusOnError === "boolean")
      return options.autoFocusOnError;
    else
      return !/iPhone|iPad|iPod|Android/i.test(userAgent);
  }
  const Form_scrollToFirstError = async () => {
    if (options.scrollToError == "off")
      return;
    const selector = options.errorSelector;
    if (!selector)
      return;
    await tick();
    let el;
    el = Form2.querySelector(selector);
    if (!el)
      return;
    el = el.querySelector(selector) ?? el;
    const nav = options.stickyNavbar ? document.querySelector(options.stickyNavbar) : null;
    if (typeof options.scrollToError != "string") {
      el.scrollIntoView(options.scrollToError);
    } else if (!isElementInViewport(el, nav?.offsetHeight ?? 0)) {
      scrollToAndCenter(el, void 0, options.scrollToError);
    }
    if (!Form_shouldAutoFocus(navigator.userAgent))
      return;
    let focusEl;
    focusEl = el;
    if (!["INPUT", "SELECT", "BUTTON", "TEXTAREA"].includes(focusEl.tagName)) {
      focusEl = focusEl.querySelector('input:not([type="hidden"]):not(.flatpickr-input), select, textarea');
    }
    if (focusEl) {
      try {
        focusEl.focus({ preventScroll: true });
        if (options.selectErrorText && focusEl.tagName == "INPUT") {
          focusEl.select();
        }
      } catch (err) {
      }
    }
  };
  {
    ErrorTextEvents_addErrorTextListeners();
    const completed = (cancelled, clearIfNotNavigating = false) => {
      Timers_clear();
      if (!cancelled)
        setTimeout(Form_scrollToFirstError);
      if (clearIfNotNavigating && !aboutToNavigate) {
        Timers_clearAll();
      }
    };
    onDestroy(() => {
      ErrorTextEvents_removeErrorTextListeners();
      completed(true);
    });
    if (!_initialized) {
      beforeNavigate((nav) => {
        if (nav.type == "enter")
          return;
        aboutToNavigate = true;
      });
      afterNavigate((nav) => {
        if (nav.type == "enter")
          return;
        aboutToNavigate = false;
        Timers_clearAll();
      });
      _initialized = true;
    }
    return {
      submitting: () => {
        aboutToNavigate = false;
        Timers_start();
      },
      completed,
      scrollToFirstError: () => {
        setTimeout(Form_scrollToFirstError);
      },
      isSubmitting: () => state === FetchStatus.Submitting || state === FetchStatus.Delayed
    };
  }
}
function cancelFlash(options) {
  if (!options.flashMessage || !browser)
    return;
  if (!shouldSyncFlash(options))
    return;
  document.cookie = `flash=; Max-Age=0; Path=${options.flashMessage.cookiePath ?? "/"};`;
}
function shouldSyncFlash(options) {
  if (!options.flashMessage || !browser)
    return false;
  return options.syncFlashMessage;
}
const noCustomValidityDataAttribute = "noCustomValidity";
function setCustomValidity(el, errors) {
  const message = errors && errors.length ? errors.join("\n") : "";
  el.setCustomValidity(message);
  if (message)
    el.reportValidity();
}
function setCustomValidityForm(formEl, errors) {
  for (const el of formEl.querySelectorAll("input,select,textarea,button")) {
    if (noCustomValidityDataAttribute in el.dataset) {
      continue;
    }
    const error = traversePath(errors, splitPath(el.name));
    setCustomValidity(el, error?.value);
    if (error?.value)
      return;
  }
}
function formEnhance(formEl, submitting, delayed, timeout, errs, Form_updateFromActionResult, options, data, message, enableTaintedForm, formEvents, formId, constraints, tainted, lastChanges, Context_findValidationForms, posted) {
  enableTaintedForm();
  const errors = errs;
  async function validateChange(change, event, validityEl) {
    if (options.customValidity && validityEl) {
      if ("setCustomValidity" in validityEl) {
        validityEl.setCustomValidity("");
      }
      if (noCustomValidityDataAttribute in validityEl.dataset)
        if (event == "input")
          return;
        else
          validityEl = null;
    }
    const newErrors = await validateField(change, options, data, errors, tainted);
    if (validityEl) {
      setCustomValidity(validityEl, newErrors);
    }
  }
  function timingIssue(el) {
    return el && (el instanceof HTMLSelectElement || el instanceof HTMLInputElement && (el.type == "radio" || el.type == "checkbox"));
  }
  async function checkBlur(e) {
    if (options.validationMethod == "oninput" || options.validationMethod == "submit-only") {
      return;
    }
    if (timingIssue(e.target)) {
      await new Promise((r) => setTimeout(r, 0));
    }
    for (const change of get_store_value(lastChanges)) {
      let validityEl = null;
      if (options.customValidity) {
        const name = CSS.escape(mergePath(change));
        validityEl = formEl.querySelector(`[name="${name}"]`);
      }
      validateChange(change, "blur", validityEl);
    }
    lastChanges.set([]);
  }
  formEl.addEventListener("focusout", checkBlur);
  async function checkCustomValidity(e) {
    if (timingIssue(e.target)) {
      await new Promise((r) => setTimeout(r, 0));
    }
    for (const change of get_store_value(lastChanges)) {
      const name = CSS.escape(mergePath(change));
      const validityEl = formEl.querySelector(`[name="${name}"]`);
      if (!validityEl)
        continue;
      const hadErrors = traversePath(get_store_value(errors), change);
      if (hadErrors && hadErrors.key in hadErrors.parent) {
        setTimeout(() => validateChange(change, "input", validityEl), 0);
      }
    }
  }
  if (options.customValidity) {
    formEl.addEventListener("input", checkCustomValidity);
  }
  onDestroy(() => {
    formEl.removeEventListener("focusout", checkBlur);
    formEl.removeEventListener("input", checkCustomValidity);
  });
  const htmlForm = Form$1(formEl, { submitting, delayed, timeout }, options);
  let currentRequest;
  return enhance(formEl, async (submit) => {
    const submitCancel = submit.cancel;
    let cancelled = false;
    function cancel() {
      cancelled = true;
      return submitCancel();
    }
    submit.cancel = cancel;
    if (htmlForm.isSubmitting() && options.multipleSubmits == "prevent") {
      cancel();
    } else {
      if (htmlForm.isSubmitting() && options.multipleSubmits == "abort") {
        if (currentRequest)
          currentRequest.abort();
      }
      currentRequest = submit.controller;
      for (const event of formEvents.onSubmit) {
        await event(submit);
      }
    }
    if (cancelled) {
      if (options.flashMessage)
        cancelFlash(options);
    } else {
      const validation = await clientValidation(options, get_store_value(data), get_store_value(formId), get_store_value(constraints), get_store_value(posted));
      if (!validation.valid) {
        cancel();
        const result = {
          type: "failure",
          status: (typeof options.SPA === "boolean" ? void 0 : options.SPA?.failStatus) ?? 400,
          data: { form: validation }
        };
        setTimeout(() => validationResponse({ result }), 0);
      }
      if (!cancelled) {
        switch (options.clearOnSubmit) {
          case "errors-and-message":
            errors.clear();
            message.set(void 0);
            break;
          case "errors":
            errors.clear();
            break;
          case "message":
            message.set(void 0);
            break;
        }
        if (options.flashMessage && (options.clearOnSubmit == "errors-and-message" || options.clearOnSubmit == "message") && shouldSyncFlash(options)) {
          options.flashMessage.module.getFlash(page).set(void 0);
        }
        htmlForm.submitting();
        const submitData = "formData" in submit ? submit.formData : submit.data;
        if (options.SPA) {
          cancel();
          const validationResult = {
            valid: true,
            posted: true,
            errors: {},
            data: get_store_value(data),
            constraints: get_store_value(constraints),
            message: void 0,
            id: get_store_value(formId)
          };
          const result = {
            type: "success",
            status: 200,
            data: { form: validationResult }
          };
          setTimeout(() => validationResponse({ result }), 0);
        } else if (options.dataType === "json") {
          const postData = get_store_value(data);
          const chunks = chunkSubstr(stringify(postData), options.jsonChunkSize ?? 5e5);
          for (const chunk of chunks) {
            submitData.append("__superform_json", chunk);
          }
          Object.keys(postData).forEach((key) => {
            if (typeof submitData.get(key) === "string") {
              submitData.delete(key);
            }
          });
        }
        if (!options.SPA && !submitData.has("__superform_id")) {
          const id = get_store_value(formId);
          if (id !== void 0)
            submitData.set("__superform_id", id);
        }
      }
    }
    function chunkSubstr(str, size) {
      const numChunks = Math.ceil(str.length / size);
      const chunks = new Array(numChunks);
      for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substring(o, o + size);
      }
      return chunks;
    }
    async function validationResponse(event) {
      const result = event.result;
      currentRequest = null;
      let cancelled2 = false;
      const data2 = {
        result,
        formEl,
        cancel: () => cancelled2 = true
      };
      for (const event2 of formEvents.onResult) {
        await event2(data2);
      }
      if (!cancelled2) {
        if ((result.type === "success" || result.type == "failure") && result.data) {
          const forms = Context_findValidationForms(result.data);
          if (!forms.length) {
            throw new SuperFormError("No form data returned from ActionResult. Make sure you return { form } in the form actions.");
          }
          for (const newForm of forms) {
            if (newForm.id !== get_store_value(formId))
              continue;
            const data3 = {
              form: newForm,
              formEl,
              cancel: () => cancelled2 = true
            };
            for (const event2 of formEvents.onUpdate) {
              await event2(data3);
            }
            if (!cancelled2 && options.customValidity) {
              setCustomValidityForm(formEl, data3.form.errors);
            }
          }
        }
        if (!cancelled2) {
          if (result.type !== "error") {
            if (result.type === "success" && options.invalidateAll) {
              await invalidateAll();
            }
            if (options.applyAction) {
              await applyAction();
            } else {
              await Form_updateFromActionResult(result);
            }
          } else {
            if (options.applyAction) {
              if (options.onError == "apply") {
                await applyAction();
              } else {
                ({
                  type: "failure",
                  status: Math.floor(result.status || 500),
                  data: result
                });
                await applyAction();
              }
            }
            if (options.onError !== "apply") {
              const data3 = { result, message };
              for (const event2 of formEvents.onError) {
                if (event2 !== "apply")
                  await event2(data3);
              }
            }
          }
          if (options.flashMessage) {
            if (result.type == "error" && options.flashMessage.onError) {
              await options.flashMessage.onError({
                result,
                message: options.flashMessage.module.getFlash(page)
              });
            }
          }
        }
      }
      if (cancelled2 && options.flashMessage) {
        cancelFlash(options);
      }
      if (cancelled2 || result.type != "redirect") {
        htmlForm.completed(cancelled2);
      } else if (result.type == "redirect" && new URL(result.location, /^https?:\/\//.test(result.location) ? void 0 : document.location.origin).pathname == document.location.pathname) {
        setTimeout(() => {
          htmlForm.completed(true, true);
        }, 0);
      }
    }
    return validationResponse;
  });
}
const defaultFormOptions = {
  applyAction: true,
  invalidateAll: true,
  resetForm: false,
  autoFocusOnError: "detect",
  scrollToError: "smooth",
  errorSelector: '[aria-invalid="true"],[data-invalid]',
  selectErrorText: false,
  stickyNavbar: void 0,
  taintedMessage: "Do you want to leave this page? Changes you made may not be saved.",
  onSubmit: void 0,
  onResult: void 0,
  onUpdate: void 0,
  onUpdated: void 0,
  onError: (event) => {
    console.warn("Unhandled Superform error, use onError event to handle it:", event.result.error);
  },
  dataType: "form",
  validators: void 0,
  defaultValidator: "keep",
  customValidity: false,
  clearOnSubmit: "errors-and-message",
  delayMs: 500,
  timeoutMs: 8e3,
  multipleSubmits: "prevent",
  validation: void 0,
  SPA: void 0,
  validateMethod: "auto"
};
const formIds = /* @__PURE__ */ new WeakMap();
const initializedForms = /* @__PURE__ */ new WeakMap();
function multipleFormIdError(id) {
  return `Duplicate form id's found: "${id}". Multiple forms will receive the same data. Use the id option to differentiate between them, or if this is intended, set the warnings.duplicateId option to false in superForm to disable this warning. More information: https://superforms.rocks/concepts/multiple-forms`;
}
function superForm(form, options = {}) {
  {
    options = {
      ...defaultFormOptions,
      ...options
    };
    if (options.SPA && options.validators === void 0) {
      console.warn("No validators set for superForm in SPA mode. Add them to the validators option, or set it to false to disable this warning.");
    }
  }
  let _formId = options.id;
  if (!form || Context_isValidationObject(form) === false) {
    if (options.warnings?.noValidationAndConstraints !== false) {
      console.warn((form ? "Form data sent directly to superForm instead of through superValidate. No initial data validation is made. " : "No form data sent to superForm, schema type safety cannot be guaranteed. ") + "Also, no constraints will exist for the form. Set the warnings.noValidationAndConstraints option to false to disable this warning.");
    }
    form = {
      valid: false,
      posted: false,
      errors: {},
      data: form ?? {},
      constraints: {}
    };
  } else {
    if (_formId === void 0)
      _formId = form.id;
  }
  const _initialFormId = _formId;
  const _currentPage = get_store_value(page);
  if (options.warnings?.duplicateId !== false) {
    if (!formIds.has(_currentPage)) {
      formIds.set(_currentPage, /* @__PURE__ */ new Set([_initialFormId]));
    } else {
      const currentForms = formIds.get(_currentPage);
      if (currentForms?.has(_initialFormId)) {
        console.warn(multipleFormIdError(_initialFormId));
      } else {
        currentForms?.add(_initialFormId);
      }
    }
  }
  if (!initializedForms.has(form)) {
    initializedForms.set(form, clone$1(form));
  }
  const initialForm = initializedForms.get(form);
  if (typeof initialForm.valid !== "boolean") {
    throw new SuperFormError("A non-validation object was passed to superForm. It should be an object of type SuperValidated, usually returned from superValidate.");
  }
  let _initiallyCloned = false;
  const postedData = _currentPage.form;
  if (postedData && typeof postedData === "object") {
    for (const postedForm of Context_findValidationForms(postedData).reverse()) {
      if (postedForm.id === _formId && !initializedForms.has(postedForm)) {
        initializedForms.set(postedData, postedData);
        const pageDataForm = form;
        form = postedForm;
        if (form.valid && options.resetForm && (options.resetForm === true || options.resetForm())) {
          form = clone$1(pageDataForm);
          form.message = clone$1(postedForm.message);
          _initiallyCloned = true;
        }
        break;
      }
    }
  }
  if (!_initiallyCloned)
    form = clone$1(initialForm);
  const form2 = form;
  const _errors = writable(form2.errors);
  const FormId = writable(_formId);
  const Context = {
    taintedMessage: options.taintedMessage,
    taintedFormState: clone$1(initialForm.data)
  };
  function Context_randomId(length = 8) {
    return Math.random().toString(36).substring(2, length + 2);
  }
  function Context_setTaintedFormState(data) {
    Context.taintedFormState = clone$1(data);
  }
  function Context_findValidationForms(data) {
    const forms = Object.values(data).filter((v) => Context_isValidationObject(v) !== false);
    return forms;
  }
  function Context_isValidationObject(object) {
    if (!object || typeof object !== "object")
      return false;
    if (!("valid" in object && "errors" in object && typeof object.valid === "boolean")) {
      return false;
    }
    return "id" in object && typeof object.id === "string" ? object.id : void 0;
  }
  function Context_useEnhanceEnabled() {
    options.taintedMessage = Context.taintedMessage;
    if (_formId === void 0)
      FormId.set(Context_randomId());
  }
  function Context_newFormStore(data) {
    const _formData = writable(data);
    return {
      subscribe: _formData.subscribe,
      set: (value, options2 = {}) => {
        Tainted_update(value, Context.taintedFormState, options2.taint ?? true);
        Context_setTaintedFormState(value);
        return _formData.set(clone$1(value));
      },
      update: (updater, options2 = {}) => {
        return _formData.update((value) => {
          const output = updater(value);
          Tainted_update(output, Context.taintedFormState, options2.taint ?? true);
          Context_setTaintedFormState(output);
          return output;
        });
      }
    };
  }
  const Unsubscriptions = [
    FormId.subscribe((id) => _formId = id)
  ];
  function Unsubscriptions_unsubscribe() {
    Unsubscriptions.forEach((unsub) => unsub());
  }
  const Form2 = Context_newFormStore(form2.data);
  function Form_checkForNestedData(key, value) {
    if (!value || typeof value !== "object")
      return;
    if (Array.isArray(value)) {
      if (value.length > 0)
        Form_checkForNestedData(key, value[0]);
    } else if (!(value instanceof Date)) {
      throw new SuperFormError(`Object found in form field "${key}". Set the dataType option to "json" and add use:enhance to use nested data structures. More information: https://superforms.rocks/concepts/nested-data`);
    }
  }
  async function Form_updateFromValidation(form3, untaint) {
    if (form3.valid && untaint && options.resetForm && (options.resetForm === true || options.resetForm())) {
      Form_reset(form3.message);
    } else {
      rebind(form3, untaint);
    }
    if (formEvents.onUpdated.length) {
      await tick();
    }
    for (const event of formEvents.onUpdated) {
      event({ form: form3 });
    }
  }
  function Form_reset(message, data, id) {
    const resetData = clone$1(initialForm);
    resetData.data = { ...resetData.data, ...data };
    if (id !== void 0)
      resetData.id = id;
    rebind(resetData, true, message);
  }
  const Form_updateFromActionResult = async (result, untaint) => {
    if (result.type == "error") {
      throw new SuperFormError(`ActionResult of type "${result.type}" cannot be passed to update function.`);
    }
    if (result.type == "redirect") {
      if (options.resetForm && (options.resetForm === true || options.resetForm())) {
        Form_reset();
      }
      return;
    }
    if (typeof result.data !== "object") {
      throw new SuperFormError("Non-object validation data returned from ActionResult.");
    }
    const forms = Context_findValidationForms(result.data);
    if (!forms.length) {
      throw new SuperFormError("No form data returned from ActionResult. Make sure you return { form } in the form actions.");
    }
    for (const newForm of forms) {
      if (newForm.id !== _formId)
        continue;
      await Form_updateFromValidation(newForm, untaint ?? (result.status >= 200 && result.status < 300));
    }
  };
  const LastChanges = writable([]);
  const Message = writable(form2.message);
  const Constraints = writable(form2.constraints);
  const Posted = writable(false);
  const Errors = {
    subscribe: _errors.subscribe,
    set: _errors.set,
    update: _errors.update,
    /**
     * To work with client-side validation, errors cannot be deleted but must
     * be set to undefined, to know where they existed before (tainted+error check in oninput)
     */
    clear: () => clearErrors(_errors, {
      undefinePath: null,
      clearFormLevelErrors: true
    })
  };
  const Tainted = writable();
  async function Tainted__validate(path, taint) {
    if (options.validationMethod == "onblur" || options.validationMethod == "submit-only") {
      return false;
    }
    let shouldValidate = options.validationMethod === "oninput";
    if (!shouldValidate) {
      const errorContent = get_store_value(Errors);
      const errorNode = errorContent ? pathExists(errorContent, path, {
        modifier: (pathData) => {
          if (isInvalidPath(path, pathData)) {
            throw new SuperFormError("Errors can only be added to form fields, not to arrays or objects in the schema. Path: " + pathData.path.slice(0, -1));
          }
          return pathData.value;
        }
      }) : void 0;
      const hasError = errorNode && errorNode.key in errorNode.parent;
      shouldValidate = !!hasError;
    }
    if (shouldValidate) {
      await validateField(path, options, Form2, Errors, Tainted, { taint });
      return true;
    } else {
      return false;
    }
  }
  async function Tainted_update(newObj, compareAgainst, taintOptions) {
    if (taintOptions === false) {
      return;
    } else if (taintOptions === "untaint-all") {
      Tainted.set(void 0);
      return;
    }
    let paths = comparePaths(newObj, compareAgainst);
    if (typeof taintOptions === "object") {
      if (typeof taintOptions.fields === "string")
        taintOptions.fields = [taintOptions.fields];
      paths = taintOptions.fields.map((path) => splitPath(path));
      taintOptions = true;
    }
    if (taintOptions === true) {
      LastChanges.set(paths);
    }
    if (paths.length) {
      Tainted.update((tainted) => {
        if (!tainted)
          tainted = {};
        setPaths(tainted, paths, taintOptions === true ? true : void 0);
        return tainted;
      });
      let updated = false;
      for (const path of paths) {
        updated = updated || await Tainted__validate(path, taintOptions);
      }
      if (!updated)
        await validateObjectErrors(options, get_store_value(Form2), Errors);
    }
  }
  function Tainted_set(tainted, newData) {
    Tainted.set(tainted);
    Context_setTaintedFormState(newData);
  }
  const Submitting = writable(false);
  const Delayed = writable(false);
  const Timeout = writable(false);
  const AllErrors = derived(Errors, ($errors) => {
    if (!$errors)
      return [];
    return flattenErrors($errors);
  });
  options.taintedMessage = void 0;
  onDestroy(() => {
    Unsubscriptions_unsubscribe();
    for (const events of Object.values(formEvents)) {
      events.length = 0;
    }
    formIds.get(_currentPage)?.delete(_initialFormId);
  });
  if (options.dataType !== "json") {
    for (const [key, value] of Object.entries(form2.data)) {
      Form_checkForNestedData(key, value);
    }
  }
  function rebind(form3, untaint, message) {
    if (untaint) {
      Tainted_set(typeof untaint === "boolean" ? void 0 : untaint, form3.data);
    }
    message = message ?? form3.message;
    Form2.set(form3.data, { taint: false });
    Message.set(message);
    Errors.set(form3.errors);
    FormId.set(form3.id);
    Posted.set(form3.posted);
    if (options.flashMessage && shouldSyncFlash(options)) {
      const flash = options.flashMessage.module.getFlash(page);
      if (message && get_store_value(flash) === void 0) {
        flash.set(message);
      }
    }
  }
  const formEvents = {
    onSubmit: options.onSubmit ? [options.onSubmit] : [],
    onResult: options.onResult ? [options.onResult] : [],
    onUpdate: options.onUpdate ? [options.onUpdate] : [],
    onUpdated: options.onUpdated ? [options.onUpdated] : [],
    onError: options.onError ? [options.onError] : []
  };
  const Fields = Object.fromEntries(Object.keys(initialForm.data).map((key) => {
    return [
      key,
      {
        name: key,
        value: fieldProxy(Form2, key),
        errors: fieldProxy(Errors, key),
        constraints: fieldProxy(Constraints, key)
      }
    ];
  }));
  function validate(path, opts) {
    if (path === void 0) {
      return clientValidation(options, get_store_value(Form2), _formId, get_store_value(Constraints), false);
    }
    return validateField(splitPath(path), options, Form2, Errors, Tainted, opts);
  }
  return {
    form: Form2,
    formId: FormId,
    errors: Errors,
    message: Message,
    constraints: Constraints,
    fields: Fields,
    tainted: Tainted,
    submitting: derived(Submitting, ($s) => $s),
    delayed: derived(Delayed, ($d) => $d),
    timeout: derived(Timeout, ($t) => $t),
    options,
    capture: function() {
      return {
        valid: initialForm.valid,
        posted: get_store_value(Posted),
        errors: get_store_value(Errors),
        data: get_store_value(Form2),
        constraints: get_store_value(Constraints),
        message: get_store_value(Message),
        id: _formId,
        tainted: get_store_value(Tainted)
      };
    },
    restore: function(snapshot) {
      return rebind(snapshot, snapshot.tainted ?? true);
    },
    validate,
    enhance: (el, events) => {
      if (events) {
        if (events.onError) {
          if (options.onError === "apply") {
            throw new SuperFormError('options.onError is set to "apply", cannot add any onError events.');
          } else if (events.onError === "apply") {
            throw new SuperFormError('Cannot add "apply" as onError event in use:enhance.');
          }
          formEvents.onError.push(events.onError);
        }
        if (events.onResult)
          formEvents.onResult.push(events.onResult);
        if (events.onSubmit)
          formEvents.onSubmit.push(events.onSubmit);
        if (events.onUpdate)
          formEvents.onUpdate.push(events.onUpdate);
        if (events.onUpdated)
          formEvents.onUpdated.push(events.onUpdated);
      }
      return formEnhance(el, Submitting, Delayed, Timeout, Errors, Form_updateFromActionResult, options, Form2, Message, Context_useEnhanceEnabled, formEvents, FormId, Constraints, Tainted, LastChanges, Context_findValidationForms, Posted);
    },
    allErrors: AllErrors,
    posted: Posted,
    reset: (options2) => Form_reset(options2?.keepMessage ? get_store_value(Message) : void 0, options2?.data, options2?.id)
  };
}
const FORM_FIELD_CONTEXT = "FormField";
function createFormField(form, name) {
  const superFormStores = formFieldProxy(form.form, name);
  const attrStore = writable({});
  const hasValidation = writable(false);
  const hasDescription = writable(false);
  const { errors, value } = superFormStores;
  const ids = generateIds();
  const actions = {
    label: createLabelAction({
      htmlFor: ids.input
    }),
    description: createDescriptionAction({ id: ids.description, hasDescription }),
    validation: createValidationAction({
      id: ids.validation,
      hasValidation,
      attrs: {
        "aria-live": "assertive"
      }
    }),
    input: createInputAction({ id: ids.input, value, name, attrs: attrStore }),
    textarea: createTextareaAction({ id: ids.input, value, name, attrs: attrStore }),
    radio: createRadioAction({ id: ids.input, value, name, attrs: attrStore }),
    select: createSelectAction({ id: ids.input, value, name, attrs: attrStore }),
    checkbox: createCheckboxAction({ id: ids.input, value, name, attrs: attrStore })
  };
  const setValue = (v) => {
    value.set(v);
  };
  const handlers = createHandlers(setValue);
  const context = {
    ids,
    name,
    errors,
    value,
    hasValidation,
    hasDescription,
    attrStore,
    actions,
    setValue,
    handlers
  };
  setContext(FORM_FIELD_CONTEXT, context);
  function getFieldAttrs(props) {
    const { val, errors: errors2, constraints, hasValidation: hasValidation2, hasDescription: hasDescription2 } = props;
    const describedBy = errors2 ? `${hasValidation2 ? ids.validation : ""} ${hasDescription2 ? ids.description : ""}` : ids.description ? ids.description : void 0;
    return {
      "aria-invalid": errors2 ? true : void 0,
      "aria-describedby": describedBy,
      "aria-required": constraints?.required ? true : false,
      "data-invalid": errors2 ? true : void 0,
      "data-valid": errors2 ? void 0 : true,
      name,
      id: ids.input,
      value: val
    };
  }
  return {
    superFormStores,
    getFieldAttrs,
    actions,
    ids,
    attrStore,
    hasDescription,
    hasValidation
  };
}
function createHandlers(setValue) {
  return {
    input: (e) => {
      const target = e.target;
      if (!isHTMLInputElement(target) && !isHTMLTextareaElement(target))
        return;
      setValue(target.value);
    },
    checkbox: (e) => {
      const target = e.target;
      if (!isHTMLInputElement(target))
        return;
      setValue(target.checked);
    },
    radio: (e) => {
      const target = e.target;
      if (!isHTMLInputElement(target))
        return;
      if (target.checked)
        setValue(target.value);
    },
    select: (e) => {
      const target = e.target;
      if (!isHTMLSelectElement(target))
        return;
      setValue(target.value);
    }
  };
}
function generateIds() {
  const input = Math.random().toString(36).slice(3);
  const description = `${input}-description`;
  const validation = `${input}-validation`;
  return {
    input,
    description,
    validation
  };
}
function getCtx() {
  return getContext(FORM_FIELD_CONTEXT);
}
function setAttributes(node, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    if (typeof value === "string") {
      node.setAttribute(key, value);
    }
  }
}
function createLabelAction(props) {
  const { htmlFor } = props;
  return (node) => {
    node.htmlFor = htmlFor;
    const handleMouseDown = (e) => {
      e.preventDefault();
    };
    const unsubEvent = addEventListener(node, "mousedown", handleMouseDown);
    return {
      destroy() {
        unsubEvent();
      }
    };
  };
}
function createValidationAction(props) {
  const { id, hasValidation, attrs } = props;
  return (node) => {
    node.id = id;
    setAttributes(node, attrs);
    hasValidation.set(true);
    return {
      destroy() {
        hasValidation.set(false);
      }
    };
  };
}
function createDescriptionAction(props) {
  const { id, hasDescription } = props;
  return (node) => {
    node.id = id;
    hasDescription.set(true);
    return {
      destroy() {
        hasDescription.set(false);
      }
    };
  };
}
function createInputAction(props) {
  const { id, value, name, attrs } = props;
  return (node) => {
    node.id = id;
    node.value = get_store_value(value) ?? "";
    node.name = name;
    const unsubAttrs = effect(attrs, ($attrs) => {
      setAttributes(node, $attrs);
    });
    const handleInput = () => {
      value.set(node.value);
    };
    const unsubEvent = addEventListener(node, "input", handleInput);
    return {
      destroy() {
        unsubEvent();
        unsubAttrs();
      }
    };
  };
}
function createTextareaAction(props) {
  const { id, value, name, attrs } = props;
  return (node) => {
    node.id = id;
    node.value = get_store_value(value) ?? "";
    node.name = name;
    const unsubAttrs = effect(attrs, ($attrs) => {
      setAttributes(node, $attrs);
    });
    const handleInput = () => {
      value.set(node.value);
    };
    const unsubEvent = addEventListener(node, "input", handleInput);
    return {
      destroy() {
        unsubEvent();
        unsubAttrs();
      }
    };
  };
}
function createCheckboxAction(props) {
  const { id, value, name, attrs } = props;
  return (node) => {
    node.id = id;
    node.checked = get_store_value(value) ?? false;
    node.name = name;
    const handleChange = () => {
      value.set(node.checked);
    };
    const unsubAttrs = effect(attrs, ($attrs) => {
      setAttributes(node, $attrs);
    });
    const unsubEvent = addEventListener(node, "change", handleChange);
    return {
      destroy() {
        unsubEvent();
        unsubAttrs();
      }
    };
  };
}
function createRadioAction(props) {
  const { id, value, name, attrs } = props;
  return (node) => {
    node.id = id;
    node.name = name;
    const $value = get_store_value(value);
    if (node.value === $value) {
      node.checked = true;
    } else {
      node.checked = false;
    }
    const unsubAttrs = effect(attrs, ($attrs) => {
      delete $attrs.value;
      setAttributes(node, $attrs);
    });
    const handleChange = () => {
      if (node.checked) {
        value.set(node.value);
      }
    };
    const unsubEvent = addEventListener(node, "change", handleChange);
    return {
      destroy() {
        unsubEvent();
        unsubAttrs();
      }
    };
  };
}
function createSelectAction(props) {
  const { id, value, name, attrs } = props;
  return (node) => {
    node.id = id;
    node.value = get_store_value(value) ?? "";
    node.name = name;
    const handleChange = () => {
      value.set(node.value);
    };
    const unsubAttrs = effect(attrs, ($attrs) => {
      setAttributes(node, $attrs);
    });
    const unsubEvent = addEventListener(node, "change", handleChange);
    return {
      destroy() {
        unsubEvent();
        unsubAttrs();
      }
    };
  };
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
function isHTMLSelectElement(element) {
  return element instanceof HTMLSelectElement;
}
function isHTMLTextareaElement(element) {
  return element instanceof HTMLTextAreaElement;
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  onDestroy(unsubscribe);
  const subscribe2 = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe: subscribe2
  };
}
function effect(stores, fn) {
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  onDestroy(unsub);
  return unsub;
}
const Form_field = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputAttrs;
  let attrs;
  let $hasDescription, $$unsubscribe_hasDescription;
  let $hasValidation, $$unsubscribe_hasValidation;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let $value, $$unsubscribe_value;
  let { config } = $$props;
  let { name } = $$props;
  const { superFormStores, getFieldAttrs, actions, attrStore, hasValidation, hasDescription, ids } = createFormField(config, name);
  $$unsubscribe_hasValidation = subscribe(hasValidation, (value2) => $hasValidation = value2);
  $$unsubscribe_hasDescription = subscribe(hasDescription, (value2) => $hasDescription = value2);
  const { value, errors, constraints } = superFormStores;
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  $$unsubscribe_errors = subscribe(errors, (value2) => $errors = value2);
  $$unsubscribe_constraints = subscribe(constraints, (value2) => $constraints = value2);
  const setValue = (v) => {
    value.set(v);
  };
  const handlers = createHandlers(setValue);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  inputAttrs = getFieldAttrs({
    val: $value,
    errors: $errors,
    constraints: $constraints,
    hasValidation: $hasValidation,
    hasDescription: $hasDescription
  });
  {
    attrStore.set(inputAttrs);
  }
  attrs = {
    input: inputAttrs,
    label: { for: ids.input },
    description: { id: ids.description },
    validation: {
      id: ids.validation,
      "aria-live": "assertive"
    }
  };
  $$unsubscribe_hasDescription();
  $$unsubscribe_hasValidation();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  $$unsubscribe_value();
  return `${slots.default ? slots.default({
    stores: superFormStores,
    errors: $errors,
    value: $value,
    constraints: $constraints,
    handlers,
    attrs,
    actions,
    setValue
  }) : ``}`;
});
const SuperDebug_svelte_svelte_type_style_lang = "";
const css = {
  code: ".absolute.svelte-1k7lkte.svelte-1k7lkte{position:absolute}.top-0.svelte-1k7lkte.svelte-1k7lkte{top:0}.inset-x-0.svelte-1k7lkte.svelte-1k7lkte{left:0px;right:0px}.pt-0.svelte-1k7lkte.svelte-1k7lkte{padding-top:0px}.pt-4.svelte-1k7lkte.svelte-1k7lkte{padding-top:1em}.hidden.svelte-1k7lkte.svelte-1k7lkte{height:0;overflow:hidden}.rotated.svelte-1k7lkte.svelte-1k7lkte{transform:rotate(180deg)}.super-debug.svelte-1k7lkte.svelte-1k7lkte{--_sd-bg-color:var(\r\n      --sd-bg-color,\r\n      var(--sd-vscode-bg-color, rgb(30, 41, 59))\r\n    );position:relative;background-color:var(--_sd-bg-color);border-radius:0.5rem;overflow:hidden}.super-debug--collapse.svelte-1k7lkte.svelte-1k7lkte{display:block;width:100%;color:rgba(255, 255, 255, 0.25);background-color:rgba(255, 255, 255, 0.15);padding:5px 0;display:flex;justify-content:center;border-color:transparent;margin:0;padding:3px 0}.super-debug--collapse.svelte-1k7lkte.svelte-1k7lkte:is(:hover){color:rgba(255, 255, 255, 0.35);background-color:rgba(255, 255, 255, 0.25)}.super-debug--status.svelte-1k7lkte.svelte-1k7lkte{display:flex;padding:1em;padding-bottom:0;justify-content:space-between;font-family:Inconsolata, Monaco, Consolas, 'Lucida Console',\r\n      'Courier New', Courier, monospace}.super-debug--label.svelte-1k7lkte.svelte-1k7lkte{color:var(--sd-label-color, var(--sd-vscode-label-color, white))}.super-debug--promise-loading.svelte-1k7lkte.svelte-1k7lkte{color:var(\r\n      --sd-promise-loading-color,\r\n      var(--sd-vscode-promise-loading-color, #999)\r\n    )}.super-debug--promise-rejected.svelte-1k7lkte.svelte-1k7lkte{color:var(\r\n      --sd-promise-rejected-color,\r\n      var(--sd-vscode-promise-rejected-color, #ff475d)\r\n    )}.super-debug.svelte-1k7lkte pre.svelte-1k7lkte{color:var(--sd-code-default, var(--sd-vscode-code-default, #999));background-color:var(--_sd-bg-color);font-size:1em;margin-bottom:0;padding:1em 0 1em 1em}.info.svelte-1k7lkte.svelte-1k7lkte{color:var(--sd-info, var(--sd-vscode-info, rgb(85, 85, 255)))}.success.svelte-1k7lkte.svelte-1k7lkte{color:var(--sd-success, var(--sd-vscode-success, #2cd212))}.redirect.svelte-1k7lkte.svelte-1k7lkte{color:var(--sd-redirect, var(--sd-vscode-redirect, #03cae5))}.error.svelte-1k7lkte.svelte-1k7lkte{color:var(--sd-error, var(--sd-vscode-error, #ff475d))}.super-debug--code .key{color:var(--sd-code-key, var(--sd-vscode-code-key, #eab308))}.super-debug--code .string{color:var(--sd-code-string, var(--sd-vscode-code-string, #6ec687))}.super-debug--code .date{color:var(--sd-code-date, var(--sd-vscode-code-date, #f06962))}.super-debug--code .boolean{color:var(--sd-code-boolean, var(--sd-vscode-code-boolean, #79b8ff))}.super-debug--code .number{color:var(--sd-code-number, var(--sd-vscode-code-number, #af77e9))}.super-debug--code .bigint{color:var(--sd-code-bigint, var(--sd-vscode-code-bigint, #af77e9))}.super-debug--code .null{color:var(--sd-code-null, var(--sd-vscode-code-null, #238afe))}.super-debug--code .nan{color:var(--sd-code-nan, var(--sd-vscode-code-nan, #af77e9))}.super-debug--code .undefined{color:var(\r\n      --sd-code-undefined,\r\n      var(--sd-vscode-code-undefined, #238afe)\r\n    )}.super-debug--code .function{color:var(--sd-code-function, var(--sd-vscode-code-function, #f06962))}.super-debug--code .symbol{color:var(--sd-code-symbol, var(--sd-vscode-code-symbol, #4de0c5))}.super-debug--code .error{color:var(--sd-code-error, var(--sd-vscode-code-error, #ff475d))}.super-debug.svelte-1k7lkte pre.svelte-1k7lkte::-webkit-scrollbar{width:var(--sd-sb-width, var(--sd-vscode-sb-width, 1.25rem));height:var(--sd-sb-height, var(--sd-vscode-sb-height, 1.25rem))}.super-debug.svelte-1k7lkte pre.svelte-1k7lkte::-webkit-scrollbar-track{border-radius:12px;background-color:var(\r\n      --sd-sb-track-color,\r\n      var(--sd-vscode-sb-track-color, hsl(0, 0%, 40%, 0.2))\r\n    )}.super-debug.svelte-1k7lkte:is(:focus-within, :hover) pre.svelte-1k7lkte::-webkit-scrollbar-track{border-radius:12px;background-color:var(\r\n      --sd-sb-track-color-focus,\r\n      var(--sd-vscode-sb-track-color-focus, hsl(0, 0%, 50%, 0.2))\r\n    )}.super-debug.svelte-1k7lkte pre.svelte-1k7lkte::-webkit-scrollbar-thumb{border-radius:12px;background-color:var(\r\n      --sd-sb-thumb-color,\r\n      var(--sd-vscode-sb-thumb-color, hsl(217, 50%, 50%, 0.5))\r\n    )}.super-debug.svelte-1k7lkte:is(:focus-within, :hover) pre.svelte-1k7lkte::-webkit-scrollbar-thumb{border-radius:12px;background-color:var(\r\n      --sd-sb-thumb-color-focus,\r\n      var(--sd-vscode-sb-thumb-color-focus, hsl(217, 50%, 50%))\r\n    )}",
  map: null
};
function assertPromise(data, raw, promise) {
  if (raw) {
    return false;
  }
  return promise || typeof data === "object" && data !== null && "then" in data && typeof data["then"] === "function";
}
function assertStore(data, raw) {
  if (raw) {
    return false;
  }
  return typeof data === "object" && data !== null && "subscribe" in data && typeof data["subscribe"] === "function";
}
const SuperDebug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let themeStyle;
  let debugData;
  let $page, $$unsubscribe_page;
  let $debugData, $$unsubscribe_debugData = noop, $$subscribe_debugData = () => ($$unsubscribe_debugData(), $$unsubscribe_debugData = subscribe(debugData, ($$value) => $debugData = $$value), debugData);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { display = true } = $$props;
  let { status = true } = $$props;
  let { label = "" } = $$props;
  let { stringTruncate = 120 } = $$props;
  let { ref = void 0 } = $$props;
  let { promise = false } = $$props;
  let { raw = false } = $$props;
  let { functions = false } = $$props;
  let { theme = "default" } = $$props;
  let { collapsible = false } = $$props;
  function syntaxHighlight(json) {
    switch (typeof json) {
      case "function": {
        return `<span class="function">[function ${json.name ?? "unnamed"}]</span>`;
      }
      case "symbol": {
        return `<span class="symbol">${json.toString()}</span>`;
      }
    }
    const encodedString = JSON.stringify(
      json,
      function(key, value) {
        if (value === void 0) {
          return "#}#undefined";
        }
        if (typeof this === "object" && this[key] instanceof Date) {
          return "#}D#" + (isNaN(this[key]) ? "Invalid Date" : value);
        }
        if (typeof value === "number" && isNaN(value)) {
          return "#}#NaN";
        }
        if (typeof value === "bigint") {
          return "#}BI#" + value;
        }
        if (typeof value === "function" && functions) {
          return `#}F#[function ${value.name}]`;
        }
        if (value instanceof Error) {
          return `#}E#${value.name}: ${value.message || value.cause || "(No error message)"}`;
        }
        return value;
      },
      2
    ).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return encodedString.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
          match = match.slice(1, -2) + ":";
        } else {
          cls = "string";
          match = stringTruncate > 0 && match.length > stringTruncate ? match.slice(0, stringTruncate / 2) + `[..${match.length - stringTruncate}/${match.length}..]` + match.slice(-stringTruncate / 2) : match;
          if (match == '"#}#NaN"') {
            cls = "nan";
            match = "NaN";
          } else if (match == '"#}#undefined"') {
            cls = "undefined";
            match = "undefined";
          } else if (match.startsWith('"#}D#')) {
            cls = "date";
            match = match.slice(5, -1);
          } else if (match.startsWith('"#}BI#')) {
            cls = "bigint";
            match = match.slice(6, -1) + "n";
          } else if (match.startsWith('"#}F#')) {
            cls = "function";
            match = match.slice(5, -1);
          } else if (match.startsWith('"#}E#')) {
            cls = "error";
            match = match.slice(5, -1);
          }
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.stringTruncate === void 0 && $$bindings.stringTruncate && stringTruncate !== void 0)
    $$bindings.stringTruncate(stringTruncate);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.promise === void 0 && $$bindings.promise && promise !== void 0)
    $$bindings.promise(promise);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.functions === void 0 && $$bindings.functions && functions !== void 0)
    $$bindings.functions(functions);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.collapsible === void 0 && $$bindings.collapsible && collapsible !== void 0)
    $$bindings.collapsible(collapsible);
  $$result.css.add(css);
  themeStyle = theme === "vscode" ? `
      --sd-vscode-bg-color: #1f1f1f;
      --sd-vscode-label-color: #cccccc;
      --sd-vscode-code-default: #8c8a89;
      --sd-vscode-code-key: #9cdcfe;
      --sd-vscode-code-string: #ce9171;
      --sd-vscode-code-number: #b5c180;
      --sd-vscode-code-boolean: #4a9cd6;
      --sd-vscode-code-null: #4a9cd6;
      --sd-vscode-code-undefined: #4a9cd6;
      --sd-vscode-code-nan: #4a9cd6;
      --sd-vscode-code-symbol: #4de0c5;
      --sd-vscode-sb-thumb-color: #35373a;
      --sd-vscode-sb-thumb-color-focus: #4b4d50;
    ` : void 0;
  $$subscribe_debugData(debugData = assertStore(data, raw) ? data : readable(data));
  $$unsubscribe_page();
  $$unsubscribe_debugData();
  return `${display ? `<div class="super-debug svelte-1k7lkte"${add_attribute("style", themeStyle, 0)}>${label || status ? `<div class="${"super-debug--status " + escape(label === "" ? "absolute inset-x-0 top-0" : "", true) + " svelte-1k7lkte"}"><div class="super-debug--label svelte-1k7lkte">${escape(label)}</div> ${status ? `<div class="${[
    "svelte-1k7lkte",
    ($page.status < 200 ? "info" : "") + " " + ($page.status >= 200 && $page.status < 300 ? "success" : "") + " " + ($page.status >= 300 && $page.status < 400 ? "redirect" : "") + " " + ($page.status >= 400 ? "error" : "")
  ].join(" ").trim()}">${escape($page.status)}</div>` : ``}</div>` : ``} <pre class="${[
    "super-debug--pre " + escape(label === "" ? "pt-4" : "pt-0", true) + " svelte-1k7lkte",
    ""
  ].join(" ").trim()}"${add_attribute("this", ref, 0)}><code class="super-debug--code">${slots.default ? slots.default({}) : `${assertPromise($debugData, raw, promise) ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `<div class="super-debug--promise-loading svelte-1k7lkte" data-svelte-h="svelte-18y80f8">Loading data...</div>`;
    }
    return function(result) {
      return `<!-- HTML_TAG_START -->${syntaxHighlight(assertStore(result, raw) ? get_store_value(result) : result)}<!-- HTML_TAG_END -->`;
    }(__value);
  }($debugData)}` : `<!-- HTML_TAG_START -->${syntaxHighlight($debugData)}<!-- HTML_TAG_END -->`}`}</code></pre> ${collapsible ? `<button class="super-debug--collapse svelte-1k7lkte"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="${["svelte-1k7lkte", ""].join(" ").trim()}"><path fill="currentColor" d="M4.08 11.92L12 4l7.92 7.92l-1.42 1.41l-5.5-5.5V22h-2V7.83l-5.5 5.5l-1.42-1.41M12 4h10V2H2v2h10Z"></path></svg></button>` : ``}</div>` : ``} `;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["schema", "form", "options", "asChild", "debug"]);
  let $formStore, $$unsubscribe_formStore;
  let { schema } = $$props;
  let { form } = $$props;
  const defaultOptions = { validators: schema, taintedMessage: null };
  let { options = defaultOptions } = $$props;
  const optionsWithDefaults = { ...defaultOptions, ...options };
  let { asChild = false } = $$props;
  let { debug = false } = $$props;
  const superFrm = superForm(form, optionsWithDefaults);
  const { enhance: enhance2, form: formStore, allErrors, delayed, errors, reset, submitting, tainted, timeout, validate, posted, fields, message, options: formOptions, formId, restore, capture, constraints } = superFrm;
  $$unsubscribe_formStore = subscribe(formStore, (value) => $formStore = value);
  const config = { form: superFrm, schema };
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  $$unsubscribe_formStore();
  return `${asChild ? `${slots.default ? slots.default({
    config,
    formValues: $formStore,
    form: superFrm,
    enhance: enhance2
  }) : ``}` : `<form${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({
    config,
    formValues: $formStore,
    form: superFrm,
    enhance: enhance2
  }) : ``} ${debug ? `${validate_component(SuperDebug, "SuperDebug").$$render($$result, { data: $formStore }, {}, {})}` : ``}</form>`}`;
});
export {
  Form as F,
  Form_field as a,
  createTextareaAction as b,
  createInputAction as c,
  createSelectAction as d,
  createCheckboxAction as e,
  createRadioAction as f,
  getCtx as g,
  createLabelAction as h,
  createValidationAction as i
};
