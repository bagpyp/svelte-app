

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e81dddbf.js","_app/immutable/chunks/scheduler.fd6e2bc0.js","_app/immutable/chunks/index.f16fb1b7.js","_app/immutable/chunks/stores.c14bae6b.js","_app/immutable/chunks/singletons.930a4ff1.js","_app/immutable/chunks/index.a0ed9d66.js"];
export const stylesheets = [];
export const fonts = [];
