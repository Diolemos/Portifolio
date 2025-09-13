// === Dark Mode Toggle and Persistence ===
const toggleBtn = document.getElementById('darkToggle');
const body = document.body;

// Load dark mode state from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

// Toggle dark mode on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save current state in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    toggleBtn.textContent = "🌙";
  } else {
    localStorage.setItem('darkMode', 'disabled');
    toggleBtn.textContent = "☀️";
  }
});

// === Footer Year ===
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
