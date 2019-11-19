"use strict";
/// <reference path="node_modules/@types/es4x.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("@vertx/web");
var app = web_1.Router.router(vertx);
app.route('/').handler(function (ctx) {
    ctx.response().end('Hello from Vert.x Web!');
});
vertx.createHttpServer()
    .requestHandler(app.handle)
    .listen(8090);
