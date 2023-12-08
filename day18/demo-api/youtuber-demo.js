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

let db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);

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
