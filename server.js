let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url, true).pathname;
    let queryData = url.parse(request.url, true).query;
    //favicon때문에 path가 꼬이는 문제 방지
    if (pathname !== "/favicon.ico") {
      route(pathname, handle, response, queryData.productId);
    }
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
