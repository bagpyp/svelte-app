

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6d334efe.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6d6e9cbf.js","_app/immutable/chunks/firebase.652e1d27.js","_app/immutable/chunks/index.e90833d3.js"];
export const stylesheets = [];
export const fonts = [];
