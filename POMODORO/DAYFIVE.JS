//GETTING THE HTML ELEMENTS
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const circle = document.querySelector(".ring");

//VARIABLES
let timeLeft = 1500; // 25 mins
let totalTime = 1500;
let interval;

//SHOW THE TIME ON SCREEN
function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerEl.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
//ANIMATE CIRCLE PROGRESS
function updateCircle() {
  const radius = 130;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (timeLeft / totalTime) * circumference;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = offset;
}

//START FUNCTION
function startTimer() {
  if (interval) return; // avoid multiple intervals
  interval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    updateCircle();
    if (timeLeft <= 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = totalTime;
      updateTimerDisplay();
      updateCircle();
    }
  }, 1000);
}

//STOP FUNCTION
function stopTimer() {
  clearInterval(interval);
  interval = null;
}
//SET TIMER
function resetTimer() {
  stopTimer();
  timeLeft = totalTime;
  updateTimerDisplay();
  updateCircle();
}

// Set Everything When Page Loads
updateTimerDisplay();
updateCircle();

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
