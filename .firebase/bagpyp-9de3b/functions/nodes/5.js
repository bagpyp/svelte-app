import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a12b53b5.js","_app/immutable/chunks/scheduler.fd6e2bc0.js","_app/immutable/chunks/index.f16fb1b7.js","_app/immutable/chunks/stores.f8c1292f.js","_app/immutable/chunks/singletons.11457437.js","_app/immutable/chunks/index.a0ed9d66.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
