const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas Size
canvas.width = 700;
canvas.height = 300;

// Game constants
const box = 20;
let snake = [{ x: 200, y: 100 }];
let direction = "RIGHT";
let food = spawnFood();
let score = 0;
let gameInterval;
let isPaused = false;
let gameOver = false;

// Load apple image
const appleImg = new Image();
appleImg.src = "https://cdn-icons-png.flaticon.com/512/415/415733.png";

// Controls
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "p" || event.key === "P") togglePause();
}

function spawnFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box,
  };
}

function drawGame() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw food (circle or apple image)
  if (appleImg.complete) {
    ctx.drawImage(appleImg, food.x, food.y, box, box);
  } else {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Move snake
  let head = { ...snake[0] };
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Check game over
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver = true;
    clearInterval(gameInterval);
    document.getElementById("scoreText").textContent = "Your Score: " + score;
    document.getElementById("gameOverScreen").style.display = "flex";
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = spawnFood();
  } else {
    snake.pop();
  }

  // Update score
  document.getElementById("scoreBoard").textContent = "Score: " + score;

  // Draw snake
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "white" : "lime";
    if (isPaused) {
      ctx.globalAlpha = Math.sin(Date.now() / 250) * 0.5 + 0.5;
    }
    ctx.fillRect(segment.x, segment.y, box, box);
    ctx.globalAlpha = 1;
  });
}

// Pause & Resume
function togglePause() {
  if (gameOver) return;

  if (isPaused) {
    gameInterval = setInterval(drawGame, 150);
    isPaused = false;
  } else {
    clearInterval(gameInterval);
    isPaused = true;
  }
}

// Show Score alert
function showScore() {
  alert("Your Score: " + score);
}

// Restart
function restartGame() {
  snake = [{ x: 200, y: 100 }];
  direction = "RIGHT";
  food = spawnFood();
  score = 0;
  gameOver = false;
  isPaused = false;
  document.getElementById("scoreBoard").textContent = "Score: " + score;
  document.getElementById("gameOverScreen").style.display = "none";
  clearInterval(gameInterval);
  gameInterval = setInterval(drawGame, 150);
}

// Start game
gameInterval = setInterval(drawGame, 150);
