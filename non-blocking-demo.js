function first() {
  console.log("1");
}

function second() {
  console.log("2");
}

function third() {
  console.log("3");
}

first();
// setTimeout은 js의 모듈이다.
setTimeout(second, 2000); // 2초뒤에 second를 실행한다.
// 함수의 매개변수로 변수 또는 값을 전달하는 것이 아니라, 함수를 전달하는 것!
// == "콜백 함수"

third();
