const express = require("express");
const app = express();
app.listen(1234);

app.get("/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  if (db.get(id) == undefined) {
    res.json({
      message: "없는 상품입니다.",
    });
  } else {
    product = db.get(id);
    product["id"] = id;
    // product.id = id;
    res.json(product);
  }
});

let db = new Map();

let notebook = {
  productName: "Notebook",
  price: 2000000,
};
let cup = {
  productName: "Cup",
  price: 100000,
};
let chair = {
  productName: "chair",
  price: 320000,
};
let poster = {
  productName: "poster",
  price: 22200000,
};

db.set(1, notebook); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);
