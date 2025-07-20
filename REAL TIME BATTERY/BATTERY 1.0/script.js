navigator.getBattery().then(function(battery) {
  function updateBatteryStatus() {
    const level = Math.floor(battery.level * 100);
    document.getElementById("batteryPercentage").textContent = level + "%";
    document.getElementById("batteryLevel").style.width = level + "%";
  }

  // Initial update
  updateBatteryStatus();

  // Event listeners to update on change
  battery.addEventListener('levelchange', updateBatteryStatus);
});
