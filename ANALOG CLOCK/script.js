// DARK MODE TOGGLE
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.textContent = '🌙';

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// CLOCK HANDS
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const clock = document.querySelector('.clock');

// SET TIME LOGIC
let customTime = null;
let customStart = null;

function updateClock() {
  let now = new Date();

  if (customTime) {
    const elapsed = Date.now() - customStart;
    now = new Date(customTime.getTime() + elapsed);
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondDeg = (seconds / 60) * 360;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// SET TIME BUTTON FUNCTIONALITY
const setTimeBtn = document.getElementById("setTimeBtn");

function setTime() {
  const input = prompt("Enter time in HH:MM:SS format (24-hour clock)", "14:30:00");

  if (!input) return;

  const parts = input.split(":");
  if (parts.length !== 3) {
    alert("Invalid format. Use HH:MM:SS.");
    return;
  }

  const [h, m, s] = parts.map(Number);

  if (
    isNaN(h) || h < 0 || h > 23 ||
    isNaN(m) || m < 0 || m > 59 ||
    isNaN(s) || s < 0 || s > 59
  ) {
    alert("Invalid time input. Please try again.");
    return;
  }

  const newTime = new Date();
  newTime.setHours(h, m, s, 0);

  customTime = newTime;
  customStart = Date.now();
}

setTimeBtn.addEventListener("click", setTime);

// ADD ROMAN NUMERALS TO CLOCK
const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

for (let i = 0; i < 12; i++) {
  const numeral = document.createElement('div');
  numeral.className = 'number';

  const angle = (i * 30 - 90) * (Math.PI / 180); // Start at top
  const radius = 120;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  numeral.style.position = 'absolute';
  numeral.style.left = `calc(50% + ${x}px)`;
  numeral.style.top = `calc(50% + ${y}px)`;
  numeral.style.transform = 'translate(-50%, -50%)';
  numeral.textContent = romanNumerals[i];

  clock.appendChild(numeral);
}
