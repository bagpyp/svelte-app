

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5dd3fae5.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6d6e9cbf.js","_app/immutable/chunks/stores.14e16492.js","_app/immutable/chunks/singletons.4de513e6.js","_app/immutable/chunks/index.e90833d3.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
