const express = require("express");
const app = express();

app.listen(1234);

// 채널 주소 : https://www.yotube.com/@15ya.fullmoon
// 채널 주소 : https://www.yotube.com/@ChimChakMan_Official
// 영상 주소 : https://www.yotube.com/watch?v=BmC1cmItiGs?t=12

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

app.get(`/:nickname`, function (req, res) {
  const { nickname } = req.params;

  if (nickname == "@15ya.fullmoon") {
    res.json(youtuber1);
  } else if (nickname == "@ChimChakMan_Official") {
    res.json(youtuber2);
  } else {
    res.json({ channel: nickname });
  }

  // 개발자가 예상하지 못한 에러 = 예외가 발생했다!
});
