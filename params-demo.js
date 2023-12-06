const express = require("express");
const app = express();

app.listen(1234);

app.get(`/products/:n`, function (req, res) {
  // :=> 어? 나한테 URL로 매개변수를 전달해줄 건 가보다
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담는다.
  //   console.log(req.params);
  //   console.log(req.params.n);
  res.json({
    num: req.params.n,
  });
});
