const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.id.toLowerCase(); 

    switch (color) {
      case "grey":
      case "white":
      case "blue":
      case "yellow":
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
// }
// if (e.target.id === "white") {
//   body.style.backgroundColor = e.target.id;
// }
// if (e.target.id === "blue") {
//   body.style.backgroundColor = e.target.id;
// }
// if (e.target.id === "yellow") {
//   body.style.backgroundColor = e.target.id;
// }

// Solution Two
// if (e.target.id === "grey") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "White") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "blue") {
//   body.style.backgroundColor = e.target.id;
// } else if (e.target.id === "yellow") {
//   body.style.backgroundColor = e.target.id;
// }
