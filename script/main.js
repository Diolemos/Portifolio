  const toggleBtn = document.getElementById('darkToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = 
      document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
  });

   document.getElementById("year").textContent = new Date().getFullYear();