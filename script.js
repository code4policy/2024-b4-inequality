// script.js

// Function to update the footer with the current year
function updateYear() {
  const yearSpan = document.querySelector('.current-year');
  yearSpan.textContent = new Date().getFullYear();
}

// Function to show a welcome message
function showWelcomeMessage() {
  alert('Welcome to The Rise of Modern Populism website!');
}

// Call the functions when the window loads
window.onload = function() {
  updateYear();
  showWelcomeMessage();
};
