// DARK MODE TOGGLE
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.textContent = '🌙';

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// CLOCK LOGIC
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const clock = document.querySelector('.clock');
const ticks = document.querySelector('.ticks');

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// SET CUSTOM TIME
let customStart = null;

function setTime() {
  let h = parseInt(prompt("Enter hour (0–23):", "3"));
  let m = parseInt(prompt("Enter minute (0–59):", "0"));
  let s = parseInt(prompt("Enter second (0–59):", "0"));

  if (
    isNaN(h) || h < 0 || h > 23 ||
    isNaN(m) || m < 0 || m > 59 ||
    isNaN(s) || s < 0 || s > 59
  ) {
    alert("Invalid time input!");
    return;
  }

  const base = new Date();
  base.setHours(h, m, s, 0);
  const diff = base - new Date();

  customStart = Date.now() + diff;
}

function getCustomDate() {
  if (customStart) return new Date(customStart + Date.now() - customStart);
  return new Date();
}


// ROMAN NUMERALS
const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

for (let i = 0; i < 12; i++) {
  const number = document.createElement('div');
  number.className = 'number';

  const angle = (i * 30 - 90) * (Math.PI / 180); // Start from top
  const radius = 120;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  number.style.left = `calc(50% + ${x}px)`;
  number.style.top = `calc(50% + ${y}px)`;
  number.textContent = romanNumerals[i];

  clock.appendChild(number);
}
