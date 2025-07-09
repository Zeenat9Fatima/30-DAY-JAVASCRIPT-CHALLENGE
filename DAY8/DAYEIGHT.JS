
// const progress = document.getElementById("progress");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const steps = document.querySelectorAll(".step");

// let currentStep = 1;

// function updateTracker() {
//   steps.forEach((step, idx) => {
//     if (idx < currentStep) {
//       step.classList.add("checked");
//     } else {
//       step.classList.remove("checked");
//     }
//   });

//   progress.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + "%";

//   prevBtn.disabled = currentStep === 1;
//   nextBtn.disabled = currentStep === steps.length;
// }

// nextBtn.addEventListener("click", () => {
//   if (currentStep < steps.length) {
//     currentStep++;
//     updateTracker();
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentStep > 1) {
//     currentStep--;
//     updateTracker();
//   }
// });

// updateTracker();
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressBar = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep > steps.length) currentStep = steps.length;
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) currentStep = 1;
  updateProgress();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentStep++;
    if (currentStep > steps.length) currentStep = steps.length;
    updateProgress();
  } else if (event.key === "ArrowLeft") {
    currentStep--;
    if (currentStep < 1) currentStep = 1;
    updateProgress();
  }
});

function updateProgress() {
  steps.forEach((step, index) => {
    step.classList.toggle("checked", index < currentStep);
  });

  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
  progressBar.style.width = `${progressPercent}%`;

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === steps.length;
}
