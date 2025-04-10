// Animate sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appear = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  appear.observe(fader);
});
