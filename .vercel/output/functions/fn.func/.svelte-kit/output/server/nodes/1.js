

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cd0cf0b6.js","_app/immutable/chunks/scheduler.9a75ed56.js","_app/immutable/chunks/index.7ac402cb.js","_app/immutable/chunks/stores.d448a2eb.js","_app/immutable/chunks/singletons.01533805.js"];
export const stylesheets = [];
export const fonts = [];
