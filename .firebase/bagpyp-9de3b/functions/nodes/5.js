import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a264ce06.js","_app/immutable/chunks/scheduler.279f2f81.js","_app/immutable/chunks/index.6d6e9cbf.js","_app/immutable/chunks/stores.14e16492.js","_app/immutable/chunks/singletons.4de513e6.js","_app/immutable/chunks/index.e90833d3.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
