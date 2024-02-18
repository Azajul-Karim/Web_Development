
const clock = document.querySelector('#clock');

function updateClock() {
  const now = new Date();
  clock.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
