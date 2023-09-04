import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, v as validate_component } from "../../../../chunks/ssr.js";
import { g as getCtx, c as createInputAction, b as createTextareaAction, d as createSelectAction, e as createCheckboxAction, f as createRadioAction, F as Form, a as Form_field } from "../../../../chunks/form.js";
import "../../../../chunks/index.js";
import { F as Form_label, a as Form_validation } from "../../../../chunks/form-validation.js";
import { s as someFormSchema } from "../../../../chunks/schemas.js";
import "../../../../chunks/index3.js";
import { B as Button } from "../../../../chunks/button.js";
const Form_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const { ids, value, name, attrStore } = getCtx();
  createInputAction({
    id: ids.input,
    value,
    name,
    attrs: attrStore
  });
  return `<input${spread([escape_object($$restProps)], {})}>`;
});
const Form_textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const { ids, value, name, attrStore } = getCtx();
  createTextareaAction({
    id: ids.input,
    value,
    name,
    attrs: attrStore
  });
  return `<textarea${spread([escape_object($$restProps)], {})}></textarea>`;
});
const Form_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const { ids, value, name, attrStore } = getCtx();
  createSelectAction({
    id: ids.input,
    value,
    name,
    attrs: attrStore
  });
  return `<select${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</select>`;
});
const Form_checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { ids, value, name, attrStore } = getCtx();
  createCheckboxAction({
    id: ids.input,
    value,
    name,
    attrs: attrStore
  });
  return `<input type="checkbox">`;
});
const Form_radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const { ids, value, name, attrStore } = getCtx();
  createRadioAction({
    id: ids.input,
    value,
    name,
    attrs: attrStore
  });
  return `<input${spread([{ type: "radio" }, escape_object($$restProps)], {})}>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col h-full min-h-screen w-full items-center py-28"><h1 class="text-3xl font-semibold tracking-tight pb-8" data-svelte-h="svelte-1i4dwbe">Account Settings</h1> ${validate_component(Form, "Form.Root").$$render(
    $$result,
    {
      schema: someFormSchema,
      form: data.form,
      debug: true,
      method: "POST",
      class: "container max-w-[750px] mx-auto flex flex-col gap-8"
    },
    {},
    {
      default: ({ config }) => {
        return `${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "email" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(Form_input, "Form.Input").$$render(
              $$result,
              {
                class: "rounded bg-background border border-border h-9 text-foreground p-2"
              },
              {},
              {}
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "username" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Username`;
              }
            })} ${validate_component(Form_input, "Form.Input").$$render(
              $$result,
              {
                class: "rounded bg-background border border-border h-9 text-foreground p-2"
              },
              {},
              {}
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "bio" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Bio`;
              }
            })} ${validate_component(Form_textarea, "Form.Textarea").$$render(
              $$result,
              {
                rows: 4,
                class: "resize-none rounded bg-background border border-border text-foreground p-2"
              },
              {},
              {}
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "website" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Website`;
              }
            })} ${validate_component(Form_input, "Form.Input").$$render(
              $$result,
              {
                class: "rounded bg-background border border-border h-9 text-foreground p-2"
              },
              {},
              {}
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "notifications" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Notifications`;
              }
            })} ${validate_component(Form_select, "Form.Select").$$render(
              $$result,
              {
                class: "rounded bg-background border border-border h-9 text-foreground p-2"
              },
              {},
              {
                default: () => {
                  return `<option value="all" data-svelte-h="svelte-421o1o">All</option> <option value="mentions" data-svelte-h="svelte-1501ihm">Mentions</option> <option value="none" data-svelte-h="svelte-y06u3y">None</option>`;
                }
              }
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "language" }, {}, {
          default: () => {
            return `<div class="grid gap-2">${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Language`;
              }
            })} ${validate_component(Form_select, "Form.Select").$$render(
              $$result,
              {
                class: "rounded bg-background border border-border h-9 text-foreground p-2"
              },
              {},
              {
                default: () => {
                  return `<option value="en" data-svelte-h="svelte-1bjraht">English</option> <option value="es" data-svelte-h="svelte-36revo">Spanish</option> <option value="fr" data-svelte-h="svelte-1mzqoq2">French</option>`;
                }
              }
            )} ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "usage" }, {}, {
          default: () => {
            return `<div class="grid gap-2"><div class="flex items-center gap-4">${validate_component(Form_checkbox, "Form.Checkbox").$$render($$result, {}, {}, {})} ${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Send crash reports &amp; statistics`;
              }
            })}</div> ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "theme" }, {}, {
          default: () => {
            return `<div class="grid gap-2"><div class="flex items-center gap-4">${validate_component(Form_radio, "Form.Radio").$$render($$result, { value: "light" }, {}, {})} ${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Light`;
              }
            })}</div> ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "theme" }, {}, {
          default: () => {
            return `<div class="grid gap-2"><div class="flex items-center gap-4">${validate_component(Form_radio, "Form.Radio").$$render($$result, { value: "dark" }, {}, {})} ${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Dark`;
              }
            })}</div> ${validate_component(Form_validation, "Form.Validation").$$render($$result, { class: "text-destructive" }, {}, {})}</div>`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
          default: () => {
            return `Submit`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
