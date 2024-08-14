//generate random color
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener("click", startChangingColor);

stopBtn.addEventListener("click", stopChangingColor);
