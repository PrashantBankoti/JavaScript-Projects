const buttonOne = document.querySelector("#b-1");
const playerOne = document.querySelector("#p-1");
const buttonTwo = document.querySelector("#b-2");
const playerTwo = document.querySelector("#p-2");
let winningScore = 3;
let isGameOver = false;

const dropDownValue = document.querySelector("#dropDownValue");
dropDownValue.addEventListener("change", function (e) {
  winningScore = parseInt(e.target.value);
});

var countPlayerOne = 0;
buttonOne.addEventListener("click", function () {
  if (!isGameOver) {
    countPlayerOne++;
    if (countPlayerOne === winningScore) {
      isGameOver = true;
      playerOne.style.color = "green";
      playerTwo.style.color = "red";
      buttonOne.disabled = true;
      buttonTwo.disabled = true;
    }
    playerOne.innerHTML = `${countPlayerOne}`;
  }
});

var countPlayerTwo = 0;
buttonTwo.addEventListener("click", function () {
  if (!isGameOver) {
    countPlayerTwo++;
    if (countPlayerTwo === winningScore) {
      isGameOver = true;
      playerOne.style.color = "red";
      playerTwo.style.color = "green";
      buttonOne.disabled = true;
      buttonTwo.disabled = true;
    }
    playerTwo.innerHTML = `${countPlayerTwo}`;
  }
});

// reset button

const reset = document.querySelector("#b-3");
reset.addEventListener("click", function () {
  isGameOver = false;
  countPlayerOne = 0;
  countPlayerTwo = 0;
  playerOne.innerHTML = 0;
  playerTwo.innerHTML = 0;
  playerOne.style.color = "black";
  playerTwo.style.color = "black";
  buttonOne.disabled = false;
  buttonTwo.disabled = false;
});
