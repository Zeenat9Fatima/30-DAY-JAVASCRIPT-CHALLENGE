document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const newImages = [
      "ea5421b4-ea8b-4b87-8490-7f2d422c1f67.png", // Pomodoro Timer
      "58dbc210-b347-4697-b175-14a18a79f7c4.png", // Word Scramble
      "4065ad5e-4f4a-43e4-911b-6e276c0b8793.png"  // Profile Searcher
    ];
  
    cards.forEach((card, index) => {
      const filePath = `/mnt/data/${newImages[index]}`;
      card.style.setProperty('--bg-img', `url('${filePath}')`);
    });
  });
  