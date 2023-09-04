import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as subscribe, h as escape } from "./ssr.js";
import { g as getCtx, h as createLabelAction, i as createValidationAction } from "./form.js";
const Form_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const { ids } = getCtx();
  createLabelAction({ htmlFor: ids.input });
  return `<label${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</label>`;
});
const Form_validation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let $errors, $$unsubscribe_errors;
  const { ids, errors, hasValidation } = getCtx();
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  createValidationAction({
    id: ids.validation,
    hasValidation,
    attrs: { "aria-live": "assertive" }
  });
  $$unsubscribe_errors();
  return `<span${spread([escape_object($$restProps)], {})}>${$errors ? `${escape($errors)}` : ``}</span>`;
});
export {
  Form_label as F,
  Form_validation as a
};
