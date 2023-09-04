import { c as create_ssr_component, v as validate_component, h as escape } from "../../../../chunks/ssr.js";
import { F as Form, a as Form_field } from "../../../../chunks/form.js";
import "../../../../chunks/index.js";
import { a as simpleFormSchema } from "../../../../chunks/schemas.js";
import "../../../../chunks/index3.js";
import { B as Button } from "../../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col h-full min-h-screen w-full items-center py-28"><h1 class="text-3xl font-semibold tracking-tight pb-8" data-svelte-h="svelte-1i4dwbe">Account Settings</h1> ${validate_component(Form, "Form.Root").$$render(
    $$result,
    {
      asChild: true,
      schema: simpleFormSchema,
      form: data.form,
      debug: true
    },
    {},
    {
      default: ({ config, enhance }) => {
        return `<form method="POST" class="container max-w-[750px] mx-auto flex flex-col gap-8">${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "email" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"> <label data-svelte-h="svelte-hu6a16">Email</label> <input class="rounded bg-background border border-border h-9 text-foreground p-2"> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "username" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"> <label data-svelte-h="svelte-j9lgum">Username</label> <input class="rounded bg-background border border-border h-9 text-foreground p-2"> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "bio" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"> <label data-svelte-h="svelte-1zoxt4">Bio</label> <textarea rows="4" class="rounded resize-none bg-background border border-border text-foreground p-2"></textarea> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "website" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"> <label data-svelte-h="svelte-52zhl7">Website</label> <input class="rounded bg-background border border-border h-9 text-foreground p-2"> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "notifications" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"> <label data-svelte-h="svelte-1huwqf6">Notifications</label> <select class="rounded bg-background border border-border h-9 text-foreground p-2"><option value="all" data-svelte-h="svelte-421o1o">All</option><option value="mentions" data-svelte-h="svelte-1501ihm">Mentions</option><option value="none" data-svelte-h="svelte-y06u3y">None</option></select> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Form_field, "Form.Field").$$render($$result, { config, name: "terms" }, {}, {
          default: ({ actions, errors }) => {
            return `<div class="flex flex-col gap-2"><div class="flex items-center gap-4"><input type="checkbox" class="rounded bg-background border border-border h-9 text-foreground p-2">  <label data-svelte-h="svelte-1u46auu">Accept terms and conditions</label></div> <span class="text-destructive">${errors ? `${escape(errors)}` : ``}</span></div>`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
          default: () => {
            return `Submit`;
          }
        })}</form>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
