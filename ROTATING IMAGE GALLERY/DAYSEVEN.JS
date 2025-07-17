let imageContainer = document.getElementById("imageContainer");
let angle = 0;

document.getElementById("next").onclick = function () {
  angle -= 45;
  imageContainer.style.transform = `rotateY(${angle}deg)`;
};

document.getElementById("prev").onclick = function () {
  angle += 45;
  imageContainer.style.transform = `rotateY(${angle}deg)`;
};

// Auto rotate
let autoRotate = setInterval(() => {
  angle -= 45;
  imageContainer.style.transform = `rotateY(${angle}deg)`;
}, 4000);

// Pause on hover
imageContainer.addEventListener("mouseover", () => clearInterval(autoRotate));
imageContainer.addEventListener("mouseout", () => {
  autoRotate = setInterval(() => {
    angle -= 45;
    imageContainer.style.transform = `rotateY(${angle}deg)`;
  }, 4000);
});
