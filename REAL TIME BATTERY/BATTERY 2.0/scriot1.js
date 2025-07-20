document.addEventListener("DOMContentLoaded", () => {
  const batteryFill = document.getElementById("battery-fill");
  const batteryPercent = document.getElementById("battery-percent");
  const batteryStatus = document.getElementById("battery-status");

  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      function updateBatteryUI() {
        const level = Math.floor(battery.level * 100);
        batteryPercent.textContent = `${level}%`;
        batteryFill.style.height = `${level}%`;

        if (level <= 20) {
          batteryFill.style.background = 'linear-gradient(to top, #ff0000, #cc0000)';
          batteryStatus.innerHTML = '<span>Low battery</span><span class="battery-icon">&#x1F50B;</span>';
        } else if (level <= 50) {
          batteryFill.style.background = 'linear-gradient(to top, #ffaa00, #ffcc00)';
          batteryStatus.innerHTML = '<span>Medium battery</span><span class="battery-icon">&#x1F50B;</span>';
        } else {
          batteryFill.style.background = 'linear-gradient(to top, #00ff00, #66ff66)';
          batteryStatus.innerHTML = '<span>Full battery</span><span class="battery-icon">&#x1F50B;</span>';
        }
      }

      updateBatteryUI();
      battery.addEventListener('levelchange', updateBatteryUI);
      battery.addEventListener('chargingchange', updateBatteryUI);
    });
  } else {
    alert("Battery API not supported in this browser.");
  }
});
