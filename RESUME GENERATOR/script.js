const get = id => document.getElementById(id).value;

document.getElementById("generateBtn").addEventListener("click", () => {
  document.getElementById("output").style.display = "flex";

  document.getElementById("nameOut").textContent = get("name");
  document.getElementById("roleOut").textContent = get("role");
  document.getElementById("aboutOut").textContent = get("about");

  document.getElementById("emailOut").textContent = get("email");
  document.getElementById("phoneOut").textContent = get("phone");
  document.getElementById("addressOut").textContent = get("address");
  document.getElementById("birthOut").textContent = get("birth");

  const skillsOut = document.getElementById("skillsOut");
  skillsOut.innerHTML = "";
  get("skills").split(",").forEach(skill => {
    if (skill.trim()) {
      const span = document.createElement("span");
      span.textContent = skill.trim();
      skillsOut.appendChild(span);
    }
  });

  const softSkillsOut = document.getElementById("softSkillsOut");
  softSkillsOut.innerHTML = "";
  get("softSkills").split(",").forEach(skill => {
    if (skill.trim()) {
      const span = document.createElement("span");
      span.textContent = skill.trim();
      softSkillsOut.appendChild(span);
    }
  });

  document.getElementById("lang1Out").textContent = get("lang1");
  document.getElementById("lang2Out").textContent = get("lang2");

  document.getElementById("expOut").textContent = get("exp");
  document.getElementById("certOut").textContent = get("cert");
  document.getElementById("educationOut").textContent = get("education");
});
document.getElementById("resetBtn").addEventListener("click", () => {
  // Reset all inputs and textareas
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => input.value = "");

  // Hide the output section
  document.getElementById("output").style.display = "none";

  // Also clear all output fields
  document.querySelectorAll("#output span, #output div").forEach(el => {
    if (!el.classList.contains("sidebar") && !el.classList.contains("main-content") && el.id) {
      el.textContent = "";
      el.innerHTML = "";
    }
  });
});
