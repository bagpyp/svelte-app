

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.78a2b187.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6d6e9cbf.js","_app/immutable/chunks/stores.14e16492.js","_app/immutable/chunks/singletons.4de513e6.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
