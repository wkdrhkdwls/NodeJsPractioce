const express = require("express");
const app = express();

// 서버 셋팅 : 포트 넘버(번호) 1234로 셋팅
app.listen(1234);

// /hello , /bye, /nicetomeetyou
app.get("/hello", function (req, res) {
  res.json({ say: "안녕하세요" });
});

app.get("/bye", function (req, res) {
  res.json({ say: "안녕히 가세요" });
});

// GET 메소드로, '/nicetomeetyou'이 날라오면
// 매개변수로 전달받은 콜백 함수를 호출하겠어 => 서버에 셋팅

app.get("/nicetomeetyou", function (req, res) {
  res.json({ say: "만나서 반갑습니다." });
});
