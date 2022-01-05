const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);
function onBtnStart() {
  console.log('start');
  btnStart.disabled = true;
  timerChangeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBtnStop() {
  console.log('stop');
  btnStart.disabled = false;
  clearInterval(timerChangeColor);
}
