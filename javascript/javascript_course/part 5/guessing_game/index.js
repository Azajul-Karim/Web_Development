const max = prompt("Enter the maximum number!");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your first guess!");

while (true) {
  if (guess == "quit") {
    console.log("You quit!");
  }

  if (guess == random) {
    console.log("You got it!");
    break;
  } else if (guess < random) {
    guess = prompt("Hint: Too low! Enter a new guess:");
  }else{
    guess = prompt("Hint: Too high! Enter a new guess:");
  }
}
