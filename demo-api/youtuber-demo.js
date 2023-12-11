const express = require("express");
const app = express();
app.use(express.json()); // http 외 모듈인 '미들웨어' ; json 설정
app.listen(1234);

let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만",
  videoNum: "993개",
};

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만",
  videoNum: "6600개",
};

let youtuber3 = {
  channelTitle: "침착맨2",
  sub: "2271만",
  videoNum: "66200개",
};

let db = new Map(); // key - value = json
let id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

app.get("/youtubers", function (req, res) {
  res.json({
    message: "test",
  });
});
app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber == undefined) {
    res.json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});

app.post("/youtubers", function (req, res) {
  console.log(req.body);

  db.set(id++, req.body);

  res.json({
    message: `${db.get(id - 1).channelTitle}님 환영합니다!`,
  });
});
