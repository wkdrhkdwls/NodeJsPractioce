const express = require("express");
const app = express();

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

let db = new Map();
let id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

app.get("/youtubers", function (req, res) {
  var youtubers = {};

  if (db.size !== 0) {
    db.forEach(function (value, key) {
      youtubers[key] = value;
    });

    res.json(youtubers);
  } else {
    res.status(404).json({
      message: "조회할 수 있는 유튜버가 없습니다.",
    });
  }
});

app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber == undefined) {
    res.status(404).json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});

app.use(express.json()); // http 외 모듈인 '미들웨어' ; json 설정
app.post("/youtubers", function (req, res) {
  console.log(req.body);

  db.set(id++, req.body);

  res.json({
    message: `${db.get(id - 1).channelTitle}님 환영합니다!`,
  });
});

app.delete("/youtubers/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  var youtuber = db.get(id);
  if (youtuber) {
    const channelTitle = youtuber.channelTitle;
    db.delete(id);

    res.json({
      message: `${channelTitle}님, bye`,
    });
  } else {
    res.status(404).json({
      message: `요청하신 ${id}는 없는 유튜버입니다.`,
    });
  }
});

app.delete("/youtubers", function (req, res) {
  // db에 값이 1개 이상이면, 전체 삭제

  if (db.size >= 1) {
    db.clear();

    res.json({
      message: `전체 유튜버 삭제!`,
    });
  } else {
    res.status(404).json({
      message: `삭제할 유튜버가 없습니다`,
    });
  }
});

app.put("/youtubers/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  var youtuber = db.get(id);
  var oldTitle = youtuber.channelTitle;

  if (youtuber == undefined) {
    res.status(404).json({
      message: `요청하신 ${id}는 없는 유튜버입니다.`,
    });
  } else {
    var newTitle = req.body.channelTitle;
    youtuber.channelTitle = newTitle;
    db.set(id, youtuber);

    res.json({
      message: `${oldTitle}님, ${newTItle}로 변경되었습니다.`,
    });
  }
});
