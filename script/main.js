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

// == contact form

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", async function(e) {
  e.preventDefault(); // prevent normal form submission

  // Clear previous feedback
  feedback.className = "d-none";
  feedback.textContent = "";

  const submitBtn = form.querySelector("button[type=submit]");
  submitBtn.disabled = true; // avoid double clicks

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      feedback.className = "alert alert-success mt-3 mx-auto text-center";
      feedback.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      feedback.className = "alert alert-danger mt-3 mx-auto text-center";
      feedback.textContent = "Oops! There was a problem sending your message.";
    }
  } catch (error) {
    feedback.className = "alert alert-danger mt-3 mx-auto text-center";
    feedback.textContent = "Oops! There was a problem sending your message.";
    console.error(error);
  } finally {
    submitBtn.disabled = false;

    // Scroll to feedback AFTER updating it
    feedback.scrollIntoView({ behavior: "smooth" });
  }
});