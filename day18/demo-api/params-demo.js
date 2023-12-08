const express = require("express");
const app = express();

app.listen(1234);

app.get(`/products/:n`, function (req, res) {
  // :=> 어? 나한테 URL로 매개변수를 전달해줄 건 가보다
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담는다.
  //   console.log(req.params);
  //   console.log(req.params.n);
  res.json({
    num: parseInt(req.params.n),
  });
});

// app.get(`/:nickname`, function (req, res) {
//   const param = req.params;

//   res.json({ channel: param.nickname });
// });

// 채널 주소 : https://www.yotube.com/@15ya.fullmoon
// 채널 주소 : https://www.yotube.com/@ChimChakMan_Official
// 영상 주소 : https://www.yotube.com/watch?v=BmC1cmItiGs?t=12

app.get(`/watch`, function (req, res) {
  // const q = req.query;

  // 객체의 비구조화
  const { v, t } = req.query;

  res.json({
    video: v,
    timeline: t,
  });
});
