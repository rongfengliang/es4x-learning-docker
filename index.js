"use strict";
/// <reference path="node_modules/@types/es4x.d.ts" />
vertx.createHttpServer()
    .requestHandler(function (req) {
    req.response()
        .end('Hello ES4X world!');
})
    .listen(8090);
