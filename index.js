"use strict";
/// <reference path="node_modules/@types/es4x.d.ts" />
vertx.createHttpServer()
    .requestHandler(function (req) {
    // var hello =  Java.type("Hello");
    // // set the name
    // hello.setName('Paulo');
    // // get the name
    // var name = hello.getName();
    req.response()
        .end("hello es4x");
})
    .listen(8090);
