import { c as create_ssr_component, i as each, h as escape, v as validate_component, d as subscribe, g as add_attribute } from "../../../chunks/ssr.js";
import { c as cn } from "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import "../../../chunks/index.js";
import "clsx";
import { p as page } from "../../../chunks/stores.js";
import { n as navigation } from "../../../chunks/navigation.js";
const Sidebar_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${items.length ? `<nav class="w-full">${each(items, (item, index) => {
    return `<div class="pb-4"><h4 class="mb-1 rounded-md px-1 py-1 text-sm font-semibold">${escape(item.title)}</h4> ${item.items ? `${validate_component(Sidebar_nav_items, "SidebarNavItems").$$render($$result, { items: item.items }, {}, {})}` : ``} </div>`;
  })}</nav>` : ``}`;
});
const Sidebar_nav_items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_page();
  return `${items.length ? `<div class="grid grid-flow-row auto-rows-max text-sm">${each(items, (item, index) => {
    return `${item.href ? `<a${add_attribute("href", item.href, 0)}${add_attribute(
      "class",
      cn("group flex w-full items-center rounded-md px-2 py-1 hover:underline", item.disabled && "cursor-not-allowed opacity-60", $page.url.pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground"),
      0
    )}${add_attribute("target", item.external ? "_blank" : "", 0)}${add_attribute("rel", item.external ? "noreferrer" : "", 0)}>${escape(item.title)} ${item.label ? `<span class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">${escape(item.label)} </span>` : ``} </a>` : `<span class="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline">${escape(item.title)} </span>`}`;
  })}</div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="border-b"><div class="container flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"><aside class="fixed top-14 z-30 -ml-2 hidden min-h-[calc(100vh-64px)] w-full shrink-0 md:sticky md:block overflow-y-auto"><div class="relative overflow-hidden h-full py-6 pr-6 pl-8 lg:py-8">${validate_component(Sidebar_nav, "SidebarNav").$$render($$result, { items: navigation.sidebar }, {}, {})}</div></aside> ${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
