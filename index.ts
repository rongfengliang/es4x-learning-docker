/// <reference path="node_modules/@types/es4x.d.ts" />

import { Router } from '@vertx/web';

const app = Router.router(vertx);

app.route('/').handler((ctx) => {
  ctx.response().end('Hello from Vert.x Web!');
});
vertx.createHttpServer()
  .requestHandler(app.handle)
  .listen(8090);