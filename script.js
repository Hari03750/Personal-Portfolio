// Scroll to top
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Toggle dark/light mode
document.getElementById('modeToggle').addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});
