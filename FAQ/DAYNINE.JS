
function toggleFAQ(id) {
  const allCards = document.querySelectorAll('.faq-card');

  allCards.forEach(card => {
    const icon = card.querySelector('.icon');

    if (card.id === id) {
      const isActive = card.classList.contains('active');
      card.classList.toggle('active');
      icon.textContent = isActive ? '+' : '−';
    } else {
      card.classList.remove('active');
      const otherIcon = card.querySelector('.icon');
      if (otherIcon) otherIcon.textContent = '+';
    }
  });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});
