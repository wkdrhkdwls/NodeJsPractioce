let figlet = require("figlet");

figlet("hello world!!", function (err, data) {
  // 첫 인자 => 출력하고 싶은 문자열
  if (err) {
    // 두번째 인자 => 콜백함수로 익명의 함수를 던진다
    // 왜 익명의 함수를 쓰나? => 이 함수를 다른데 쓸일이 없어서
    // figlet을 만든 사람이 매개변수를 함수로 받기로 했기 때문

    // 즉, 첫번째 매개변수인 문자열을 받아
    // "아스카 아트를 만든 다음"
    // 두번째 매개변수 function 함수를 실행 == 콜백
    console.log("error");
    console.dir(err);
    return;
  }
  console.log(data);
});
