import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/4.d7a87331.js","_app/immutable/chunks/firebase.2e63ac87.js","_app/immutable/chunks/index.a0ed9d66.js","_app/immutable/chunks/scheduler.fd6e2bc0.js","_app/immutable/chunks/index.45d3a67f.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.f16fb1b7.js"];
export const stylesheets = [];
export const fonts = [];
