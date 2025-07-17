
  
function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) return alert("Please select your date of birth!");

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;

    // Display results
    document.querySelector(".years").textContent = years;
    document.querySelector(".months").textContent = months;
    document.querySelector(".days").textContent = days;
    document.getElementById("age-result").textContent = `YOUR AGE IS: ${years} Years ${months} Months ${days} Days`;
    document.getElementById("age-months-result").textContent = `YOUR AGE IN MONTH IS: ${totalMonths} Months`;

    // Next birthday countdown
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("next-birthday").textContent = `${diffDays} days`;

    // Completed percentage
    const yearStart = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const nextYear = new Date(yearStart);
    nextYear.setFullYear(yearStart.getFullYear() + 1);
    const completedPercent = ((1 - (nextBirthday - today) / (nextYear - yearStart)) * 100).toFixed(1);
    document.getElementById("completed").textContent = `${completedPercent}%`;
  }

  function copyToClipboard() {
    const ageText = document.getElementById("age-result").textContent + '\n' + document.getElementById("age-months-result").textContent;
    navigator.clipboard.writeText(ageText);
    alert("Copied to clipboard!");
  }
  const toggleBtn = document.getElementById('toggleTheme');
  const body = document.body;
  
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  
    // Toggle emoji 🌙 <-> 🌞
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '🌞'; // Light mode emoji
    } else {
      toggleBtn.textContent = '🌙'; // Dark mode emoji
    }
  });
  