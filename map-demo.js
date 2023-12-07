const express = require("express");
const app = express();
app.listen(1234);

app.get("/:id", function (req, res) {
  const { id } = req.params;
  console.log(p.id);

  id = parseInt(id);

  res.json({
    productName: db.get(id),
  });
});

let db = new Map();
db.set(1, "NoteBook"); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, "Cup");
db.set(3, "chair");
db.set("1", "kwangjin");

console.log(db);
console.log(db.get(1));
console.log(db.get("1"));
// console.log(db.get(2));
// console.log(db.get(3));
