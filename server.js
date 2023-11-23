let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    //favicon때문에 path가 꼬이는 문제 방지
    if (!request.url.includes("favicon.ico")) {
      route(request.url, handle, response);
    }
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
