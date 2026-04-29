// Scroll Animations Module

export function initScrollAnimations() {
  const targets = document.querySelectorAll('.site-header, section');
  const vh = window.innerHeight;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    // Only animate elements that start below the fold
    if (el.getBoundingClientRect().top >= vh) {
      el.classList.add('will-animate');
      observer.observe(el);
    }
  });
}