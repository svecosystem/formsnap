import * as universal from '../entries/pages/docs/_...slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/_...slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/docs/[...slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.08666abe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.3a808bdd.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.9a75ed56.js","_app/immutable/chunks/index.7ac402cb.js","_app/immutable/chunks/stores.d448a2eb.js","_app/immutable/chunks/singletons.01533805.js","_app/immutable/chunks/index.96f6542b.js","_app/immutable/chunks/index.313e2785.js","_app/immutable/chunks/events.ac042ba1.js"];
export const stylesheets = ["_app/immutable/assets/5.5f4fef9d.css"];
export const fonts = [];
