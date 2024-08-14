const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.id.toLowerCase();

    switch (color) {
      case "grey":
      case "white":
      case "blue": 
      case "yellow":
      case "red":
        case "green":
        case "purple":
          case "black":
        body.style.backgroundColor = color;
        break;
      default:
        break;
    } 
  });
});

// Solution One
// if (e.target.id === "grey") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "White") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "blue") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "yellow") {
//   body.style.backgroundColor = e.target.id;
// }
