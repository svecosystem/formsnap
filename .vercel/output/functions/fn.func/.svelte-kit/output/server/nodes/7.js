import * as server from '../entries/pages/examples/native-elements/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/examples/native-elements/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/examples/native-elements/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.02635bcb.js","_app/immutable/chunks/scheduler.9a75ed56.js","_app/immutable/chunks/index.7ac402cb.js","_app/immutable/chunks/singletons.01533805.js","_app/immutable/chunks/schemas.055c343a.js","_app/immutable/chunks/index.3a808bdd.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.96f6542b.js","_app/immutable/chunks/stores.d448a2eb.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/button.f4bca1e1.js"];
export const stylesheets = ["_app/immutable/assets/schemas.ecbcbe74.css"];
export const fonts = [];
