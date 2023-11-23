// require 안에 server.js를 불러온다.
let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

server.start(router.route, requestHandler.handle);
