const express = require("express");
const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json()); // 이렇게 설정해줘야 post에 body값을 확인 가능

app.post("/test", function (req, res) {
  // body에 숨겨져서 들어온 데이터를 화면에 뿌려줘볼까?
  console.log(req.body); // 이렇게만하면 undefined가 나오는 문제 발생.

  res.send(req.body);
});

app.listen(port, () => {
  console.log(`dfsdfsdf ${port}`);
});
