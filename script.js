const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']"),
  body: document.querySelector('body')
};

refs.startBtn.addEventListener('click', startColorMagic);
refs.stopBtn.addEventListener('click', stopColorMagic);
let intervalId = null;
const SWITCH_DELAY = 1000;

function startColorMagic() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  intervalId = setInterval(colorSwitch, SWITCH_DELAY);
};

function stopColorMagic() {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
};

function colorSwitch() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]; 
};

// ГСЧ
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
