/*

Gamele, to learn how to add text

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowUp") {
    position = position - 100;
  }
  if (e.code === "ArrowDown") {
    position = position + 100;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
}
