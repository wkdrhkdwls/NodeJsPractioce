// require 안에 server.js를 불러온다.
let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
mariadb.connect();

server.start(router.route, requestHandler.handle);
