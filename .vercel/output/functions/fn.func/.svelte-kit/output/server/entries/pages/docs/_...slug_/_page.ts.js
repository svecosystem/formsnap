import { r as redirect, e as error } from "../../../../chunks/index.js";
import "clsx";
function slugFromPath(path) {
  return path.replace("/content/", "").replace(".md", "");
}
async function getDoc(slug) {
  if (slug === "components") {
    throw redirect(303, "/docs/components/accordion");
  }
  const modules = /* @__PURE__ */ Object.assign({ "/content/headless-usage.md": () => import("../../../../chunks/headless-usage.js"), "/content/introduction.md": () => import("../../../../chunks/introduction.js"), "/content/options.md": () => import("../../../../chunks/options.js"), "/content/quick-start.md": () => import("../../../../chunks/quick-start.js") });
  let match = {};
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === slug) {
      match = { path, resolver };
      break;
    }
  }
  const doc = await match?.resolver?.();
  if (!doc || !doc.metadata) {
    throw error(404);
  }
  return {
    component: doc.default,
    metadata: doc.metadata,
    title: doc.metadata.title
  };
}
const load = async (event) => {
  const { component, title, metadata } = await getDoc(event.params.slug);
  return {
    component,
    title,
    metadata
  };
};
export {
  load
};
