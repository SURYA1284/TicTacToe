let boxes = document.querySelectorAll(".box");
let message = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("newgame");
let turnO = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    box.textContent = turnO ? "O" : "X";
    box.disabled = true;
    turnO = !turnO;

    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winningPattern) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].textContent;
    let val2 = boxes[b].textContent;
    let val3 = boxes[c].textContent;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }
}

function showWinner(winner) {
  message.innerText = `🎉 Congrats! Winner is ${winner}`;
  boxes.forEach((box) => (box.disabled = true));
}

function resetGame() {
  turnO = true;
  message.innerText = "Winner is ...";
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
