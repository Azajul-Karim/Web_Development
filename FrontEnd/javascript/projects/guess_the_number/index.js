let ramdomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#guessSubmit");
const guessField = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMsg("Game Over! The number was " + ramdomNumber);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === ramdomNumber) {
    displayMsg(`<h1 class = "congMsg">Congratulations! You got it right!</h1>`);
    endGame();
  } else if (guess < ramdomNumber) {
    displayMsg("Too low! Try again!");
  } else if (guess > ramdomNumber) {
    displayMsg("Too high! Try again!");
  }
}

function displayGuess(guess) {
  guessField.value = "";
  guesses.innerHTML += `${guess}, `;
  numGuesses++;
  lastResult.innerHTML = `${11 - numGuesses}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h1>${msg}</h1>`;
}

function endGame() {
  guessField.value = "";
  guessField.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id ="newGame">Start New Game</button>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}


function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function () {
    ramdomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numGuesses = 1;
    guessField.removeAttribute("disabled");
    guesses.innerHTML = "";
    lowOrHi.innerHTML = "";
    lastResult.innerHTML = "";
    p.parentNode.removeChild(p);
    playGame = true;
  });
}