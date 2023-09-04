import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object } from "./ssr.js";
const Steps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<div${spread(
    [
      {
        class: "[&>h3]:step mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Steps as S
};
