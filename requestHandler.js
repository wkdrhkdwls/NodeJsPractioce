function main(response) {
  console.log("main");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Main Page");
  response.end();
}

function login(response) {
  console.log("login");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Login Page");
  response.end();
}
// key와 value값으로 이루어진 값을 handle에 넣어준다.
let handle = {};
handle["/"] = main;
handle["/login"] = login;

exports.handle = handle;
