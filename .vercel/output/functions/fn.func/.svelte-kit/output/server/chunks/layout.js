import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, f as escape_attribute_value, v as validate_component, d as subscribe } from "./ssr.js";
import "./index.js";
import { c as cn } from "./index3.js";
import "./index4.js";
import { w as writable } from "./index2.js";
import "clsx";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps),
      { fill: "currentColor" },
      { viewBox: "0 0 256 256" }
    ],
    {}
  )}><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`;
});
const Copy_simple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps),
      { fill: "currentColor" },
      { viewBox: "0 0 256 256" }
    ],
    {}
  )}><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>`;
});
const isBrowser = typeof document !== "undefined";
function createCopyCodeButton() {
  let codeString = "";
  const copied = writable(false);
  let copyTimeout = 0;
  function copyCode() {
    if (!isBrowser)
      return;
    navigator.clipboard.writeText(codeString);
    copied.set(true);
    clearTimeout(copyTimeout);
    copyTimeout = window.setTimeout(() => {
      copied.set(false);
    }, 2500);
  }
  function setCodeString(node) {
    codeString = node.innerText.trim() ?? "";
  }
  return {
    copied,
    copyCode,
    setCodeString
  };
}
const Copy_code_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "copyCode", "copied"]);
  let { class: className = void 0 } = $$props;
  let { copyCode } = $$props;
  let { copied = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.copyCode === void 0 && $$bindings.copyCode && copyCode !== void 0)
    $$bindings.copyCode(copyCode);
  if ($$props.copied === void 0 && $$bindings.copied && copied !== void 0)
    $$bindings.copied(copied);
  return `<button${spread(
    [
      {
        class: escape_attribute_value(cn("relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none", className))
      },
      escape_object($$restProps),
      { "data-code-copy": true }
    ],
    {}
  )}><span class="sr-only" data-svelte-h="svelte-1cbrti2">Copy</span> ${copied ? `${validate_component(Check, "Check").$$render($$result, { class: "h-3 w-3" }, {}, {})}` : `${validate_component(Copy_simple, "CopySimple").$$render($$result, { class: "h-3 w-3" }, {}, {})}`}</button>`;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let internal;
  let rel;
  let target;
  let $$restProps = compute_rest_props($$props, ["class", "href"]);
  let { class: className = void 0 } = $$props;
  let { href } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  internal = href.startsWith("/") || href.startsWith("#");
  rel = !internal ? "noopener noreferrer" : void 0;
  target = !internal ? "_blank" : void 0;
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { rel: escape_attribute_value(rel) },
      {
        class: escape_attribute_value(cn("inline-flex items-center gap-1 font-medium underline underline-offset-4", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<h2${spread(
    [
      {
        class: escape_attribute_value(cn("mt-12 scroll-m-20 text-2xl font-bold tracking-tight first:mt-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</h2>`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("leading-7 [&:not(:first-child)]:mt-6", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Pre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let $copied, $$unsubscribe_copied;
  let { class: className = void 0 } = $$props;
  const { copyCode, copied, setCodeString } = createCopyCodeButton();
  $$unsubscribe_copied = subscribe(copied, (value) => $copied = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$unsubscribe_copied();
  return `<pre${spread(
    [
      {
        class: escape_attribute_value(cn("mb-4 mt-6 overflow-x-auto rounded-lg border py-4 bg-primary/5", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>	${slots.default ? slots.default({}) : ``}
</pre> ${validate_component(Copy_code_button, "CopyCodeButton").$$render(
    $$result,
    {
      copyCode,
      copied: $copied,
      class: cn("absolute right-4 top-4 pre-copy-btn")
    },
    {},
    {}
  )}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `   ${slots.default ? slots.default({ title, description }) : ``}`;
});
export {
  A,
  H2 as H,
  Layout as L,
  P,
  Pre as a
};
