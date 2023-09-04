import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_attribute_value, e as escape_object } from "./ssr.js";
import "./index.js";
import { c as cn } from "./index3.js";
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<h3${spread(
    [
      {
        class: escape_attribute_value(cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</h3>`;
});
export {
  H3 as H
};
