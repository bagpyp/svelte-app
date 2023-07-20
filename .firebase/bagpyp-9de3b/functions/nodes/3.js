

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.a3ded4aa.js","_app/immutable/chunks/scheduler.fd6e2bc0.js","_app/immutable/chunks/index.f16fb1b7.js","_app/immutable/chunks/firebase.2e63ac87.js","_app/immutable/chunks/index.a0ed9d66.js"];
export const stylesheets = [];
export const fonts = [];
