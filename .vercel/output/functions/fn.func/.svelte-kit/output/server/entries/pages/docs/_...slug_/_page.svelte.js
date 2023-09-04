import { c as create_ssr_component, g as add_attribute, a as compute_rest_props, o as onDestroy, b as spread, f as escape_attribute_value, e as escape_object, v as validate_component, d as subscribe, h as escape, m as missing_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as cn } from "../../../../chunks/index3.js";
import "../../../../chunks/index4.js";
import "../../../../chunks/index.js";
import { i as is_void } from "../../../../chunks/names.js";
import "clsx";
const Page_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<section${add_attribute("class", cn("relative border-b border-border pb-8", className), 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Page_header_heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<h1${add_attribute("class", cn("scroll-m-20 text-4xl font-bold tracking-tight", className), 0)}>${slots.default ? slots.default({}) : ``}</h1>`;
});
const Page_header_tagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${add_attribute("class", cn("capitalize font-medium mb-4 text-sm/6 text-accent-foreground", className), 0)}>${slots.default ? slots.default({}) : ``}</p>`;
});
const SYMBOL_KEY = "__wrap_balancer";
const Balancer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "ratio"]);
  const as = "span";
  const ratio = 1;
  let wrapper;
  const id = crypto.randomUUID();
  onDestroy(() => {
  });
  const relayout = (id2, ratio2, wrapper2) => {
    wrapper2 = wrapper2 || document.querySelector(`[data-br="${id2}"]`);
    const container2 = wrapper2.parentElement;
    const update = (width2) => wrapper2.style.maxWidth = width2 + "px";
    wrapper2.style.maxWidth = "";
    const width = container2.clientWidth;
    const height = container2.clientHeight;
    let left = width / 2;
    let right = width;
    let middle;
    if (width) {
      while (left + 1 < right) {
        middle = ~~((left + right) / 2);
        update(middle);
        if (container2.clientHeight === height) {
          right = middle;
        } else {
          left = middle;
        }
      }
      update(right * ratio2 + width * (1 - ratio2));
    }
  };
  const MINIFIED_RELAYOUT_STR = relayout.toString();
  const sp = `<script> window.${SYMBOL_KEY}=${MINIFIED_RELAYOUT_STR};window.${SYMBOL_KEY}("${id}",${ratio}) <\/script>`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  return `${((tag) => {
    return tag ? `<${as}${spread(
      [
        { "data-br": escape_attribute_value(id) },
        {
          "data-brr": escape_attribute_value(ratio)
        },
        {
          style: "display: inline-block; vertical-align: top; text-decoration: inherit;"
        },
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", wrapper, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} <!-- HTML_TAG_START -->${sp}<!-- HTML_TAG_END -->`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
const Page_header_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${add_attribute("class", cn("text-lg text-muted-foreground mt-4", className), 0)}>${validate_component(Balancer, "Balancer").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</p>`;
});
const markdown = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component;
  let doc;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let tagline;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  component = data.component;
  doc = data.metadata;
  {
    if ($page.url.pathname.split("/")[2] === "components") {
      tagline = "Components";
    } else {
      tagline = "Overview";
    }
  }
  $$unsubscribe_page();
  return `<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"><div class="mx-auto w-full min-w-0">${validate_component(Page_header, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Page_header_tagline, "PageHeaderTagline").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(tagline)}`;
        }
      })} ${validate_component(Page_header_heading, "PageHeaderHeading").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(doc.title)}`;
        }
      })} ${validate_component(Page_header_description, "PageHeaderDescription").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(doc.description)}`;
        }
      })}`;
    }
  })} <div class="markdown pt-8">${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></main>`;
});
export {
  Page as default
};
