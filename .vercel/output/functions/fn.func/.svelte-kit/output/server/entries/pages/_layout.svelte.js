import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as subscribe, v as validate_component, f as escape_attribute_value, g as add_attribute, h as escape, i as each } from "../../chunks/ssr.js";
import { s as setTransitionTimes, c as cn } from "../../chunks/index3.js";
import { c as ctx, m as modeCurrent, s as sheetVariants, R as Root, T as Trigger, a as setInitialClassState } from "../../chunks/index4.js";
import "../../chunks/index.js";
import "clsx";
import { B as Button } from "../../chunks/button.js";
import { n as navigation } from "../../chunks/navigation.js";
import { p as page } from "../../chunks/stores.js";
import { c as createDispatcher } from "../../chunks/events.js";
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      { viewBox: "0 0 256 256" }
    ],
    {}
  )}><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg>`;
});
const Moon_stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      { viewBox: "0 0 256 256" }
    ],
    {}
  )}><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path></svg>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread([{ viewBox: "0 0 438.549 438.549" }, escape_object($$restProps)], {})}><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>`;
});
const X_com = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      {
        "aria-label": "X formerly known as Twitter"
      },
      { fill: "currentColor" },
      { viewBox: "0 0 22 20" },
      escape_object($$restProps)
    ],
    {}
  )}><path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path></svg>`;
});
const Square_half = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      { viewBox: "0 0 256 256" }
    ],
    {}
  )}><path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-64,80h64v16H136Zm0-16V88h64v16Zm0,48h64v16H136Zm64-80H136V56h64ZM56,56h64V200H56ZM200,200H136V184h64v16Z"></path></svg>`;
});
const DialogClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  const { elements: { close } } = ctx.get();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder: $close }) : ``}` : (() => {
    let builder = $close;
    return ` <button${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</button>`;
  })()}`;
});
const DialogPortal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $portalled, $$unsubscribe_portalled;
  let { asChild = false } = $$props;
  const { elements: { portalled }, states: { open } } = ctx.get();
  $$unsubscribe_portalled = subscribe(portalled, (value) => $portalled = value);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_portalled();
  return `${asChild ? (() => {
    let builder = $portalled;
    return ` ${slots.default ? slots.default({ builder }) : ``}`;
  })() : (() => {
    let builder = $portalled;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })()}`;
});
const DialogContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ]);
  let $tOpen, $$unsubscribe_tOpen;
  let $content, $$unsubscribe_content;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { content }, transitionTimes, tOpen } = ctx.get();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_tOpen = subscribe(tOpen, (value) => $tOpen = value);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    setTransitionTimes(transitionTimes, {
      transition,
      transitionConfig,
      inTransition,
      inTransitionConfig,
      outTransition,
      outTransitionConfig
    });
  }
  $$unsubscribe_tOpen();
  $$unsubscribe_content();
  return `${asChild && $tOpen ? (() => {
    let builder = $content;
    return ` ${slots.default ? slots.default({ builder }) : ``}`;
  })() : `${transition && $tOpen ? (() => {
    let builder = $content;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })() : `${inTransition && outTransition && $tOpen ? (() => {
    let builder = $content;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })() : `${inTransition && $tOpen ? (() => {
    let builder = $content;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })() : `${outTransition && $tOpen ? (() => {
    let builder = $content;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })() : `${$tOpen ? (() => {
    let builder = $content;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder }) : ``}</div>`;
  })() : ``}`}`}`}`}`}`;
});
const DialogOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ]);
  let $tOpen, $$unsubscribe_tOpen;
  let $overlay, $$unsubscribe_overlay;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { overlay }, tOpen } = ctx.get();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_tOpen = subscribe(tOpen, (value) => $tOpen = value);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_tOpen();
  $$unsubscribe_overlay();
  return `${asChild && $tOpen ? (() => {
    let builder = $overlay;
    return ` ${slots.default ? slots.default({ builder }) : ``}`;
  })() : `${transition && $tOpen ? (() => {
    let builder = $overlay;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}></div>`;
  })() : `${inTransition && outTransition && $tOpen ? (() => {
    let builder = $overlay;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}></div>`;
  })() : `${inTransition && $tOpen ? (() => {
    let builder = $overlay;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}></div>`;
  })() : `${outTransition && $tOpen ? (() => {
    let builder = $overlay;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}></div>`;
  })() : `${$tOpen ? (() => {
    let builder = $overlay;
    return ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}></div>`;
  })() : ``}`}`}`}`}`}`;
});
const Light_switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  $$unsubscribe_modeCurrent();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      role: "switch",
      "aria-label": "Light Switch",
      "aria-checked": $modeCurrent,
      title: "Toggle " + ($modeCurrent === true ? "Dark" : "Light") + " Mode",
      variant: "ghost",
      size: "icon"
    },
    {},
    {
      default: () => {
        return `${$modeCurrent ? `${validate_component(Moon_stars, "MoonStars").$$render($$result, { class: "sq-5", "aria-label": "Moon" }, {}, {})}` : `${validate_component(Sun, "Sun").$$render($$result, { class: "sq-5", "aria-label": "Sun" }, {}, {})}`}`;
      }
    }
  )}`;
});
const Sheet_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(DialogPortal, "SheetPrimitive.Portal").$$render($$result, Object.assign({}, { class: cn(className) }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sheet_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(DialogOverlay, "SheetPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Cross2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Cross2$1 = Cross2;
const Sheet_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "side"]);
  let { class: className = void 0 } = $$props;
  let { side = "right" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  return `${validate_component(Sheet_portal, "SheetPortal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Sheet_overlay, "SheetOverlay").$$render($$result, {}, {}, {})} ${validate_component(DialogContent, "SheetPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          {
            class: cn(sheetVariants({ side }), className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} ${validate_component(DialogClose, "SheetPrimitive.Close").$$render(
              $$result,
              {
                class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Cross2$1, "Cross2").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1pewzs3">Close</span>`;
                }
              }
            )}`;
          }
        }
      )}`;
    }
  })}`;
});
const siteConfig = {
  name: "Formsnap",
  url: "https://formsnap.vercel.app",
  description: "Componentized & accessible forms for SvelteKit.",
  links: {
    twitter: "https://twitter.com/huntabyte",
    github: "https://github.com/huntabyte/formsnap"
  },
  keywords: `Svelte,SvelteKit,Svelte Components,Headless Svelte Components,SvelteKit forms, svelte forms library,`
};
const Mobile_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "open", "class"]);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  let { open } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$unsubscribe_page();
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(cn(
          $page.url.pathname === href ? "text-foreground" : "text-foreground/60",
          className
        ))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Mobile_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Root, "Sheet.Root").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Trigger, "Sheet.Trigger").$$render($$result, { asChild: true }, {}, {
            default: ({ builder }) => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  builders: [builder],
                  variant: "ghost",
                  class: "mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Square_half, "SquareHalf").$$render($$result, { class: "h-5 w-5" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1t6m3jq">Toggle Menu</span>`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Sheet_content, "Sheet.Content").$$render($$result, { side: "left", class: "pr-0" }, {}, {
            default: () => {
              return `${validate_component(Mobile_link, "MobileLink").$$render(
                $$result,
                {
                  href: "/",
                  class: "flex items-center",
                  open
                },
                {},
                {
                  default: () => {
                    return `<span class="font-bold">${escape(siteConfig.name)}</span>`;
                  }
                }
              )} <div class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-auto"><div class="flex flex-col space-y-3">${each(navigation.main, (navItem, index) => {
                return `${navItem.href ? `${validate_component(Mobile_link, "MobileLink").$$render(
                  $$result,
                  { href: navItem.href, open },
                  {
                    open: ($$value) => {
                      open = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${escape(navItem.title)} `;
                    }
                  }
                )}` : ``}`;
              })}</div> <div class="flex flex-col space-y-2">${each(navigation.sidebar, (navItem, index) => {
                return `<div class="flex flex-col space-y-3 pt-6"><h4 class="font-medium">${escape(navItem.title)}</h4> ${navItem?.items?.length ? `${each(navItem.items, (item) => {
                  return `${!item.disabled && item.href ? `${validate_component(Mobile_link, "MobileLink").$$render(
                    $$result,
                    { href: item.href, open },
                    {
                      open: ($$value) => {
                        open = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${escape(item.title)} `;
                      }
                    }
                  )}` : ``}`;
                })}` : ``} </div>`;
              })}</div></div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Site_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-background/75 backdrop-blur border-b border-border -mb-px sticky top-0 z-50"><div class="container"><div class="flex items-center justify-between gap-3 h-16"><div class="flex items-center gap-1.5">${validate_component(Mobile_nav, "MobileNav").$$render($$result, {}, {}, {})} <a href="/" class="font-bold tracking-tight text-2xl " data-svelte-h="svelte-1smrisf">Formsnap</a></div> <nav class="flex items-center justify-end gap-1.5">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: siteConfig.links.github,
      target: "_blank",
      size: "icon",
      variant: "ghost",
      "aria-label": "View the github repo for this package.",
      class: ""
    },
    {},
    {
      default: () => {
        return `${validate_component(Github, "GitHub").$$render($$result, { class: "sq-5" }, {}, {})}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: siteConfig.links.twitter,
      target: "_blank",
      size: "icon",
      variant: "ghost",
      "aria-label": "X, formerly known as Twitter.",
      class: ""
    },
    {},
    {
      default: () => {
        return `${validate_component(X_com, "Xcom").$$render($$result, { class: "sq-5" }, {}, {})}`;
      }
    }
  )} ${validate_component(Light_switch, "LightSwitch").$$render($$result, {}, {}, {})}</nav></div></div></header>`;
});
const Site_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="border-t py-6 md:py-0" data-svelte-h="svelte-cx4vnd"><div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"><div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"><p class="hidden h-6 w-6 md:inline-block"></p> <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">Built by
				<a${add_attribute("href", siteConfig.links.twitter, 0)} target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">huntabyte
				</a>.</p></div></div></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-3sz8ut_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-3sz8ut_END -->`, ""} <div class="relative flex min-h-screen flex-col">${validate_component(Site_header, "SiteHeader").$$render($$result, {}, {}, {})} <div class="flex-1">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Site_footer, "SiteFooter").$$render($$result, {}, {}, {})} ${``}</div>`;
});
export {
  Layout as default
};
