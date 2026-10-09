// Testimonial Rotation Module

const TESTIMONIAL_DURATION = 6000;

let testimonialIndex = 0;
let testimonialTimer = null;

export function activateTestimonial(index) {
  const items = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  if (!items.length) return;

  items.forEach((item, i) => item.classList.toggle('active', i === index));

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    dot.setAttribute('aria-selected', i === index ? 'true' : 'false');

    if (i === index) {
      // Restart the fill animation by cloning the node
      const fresh = dot.cloneNode(true);
      fresh.style.setProperty('--duration', `${TESTIMONIAL_DURATION}ms`);
      dot.replaceWith(fresh);
      // Re-attach click handler to the fresh node
      fresh.addEventListener('click', () => goToTestimonial(parseInt(fresh.dataset.index)));
    }
  });

  testimonialIndex = index;
}

export function goToTestimonial(index) {
  clearTimeout(testimonialTimer);
  document.querySelector('.testimonial')?.classList.add('is-rotating');
  activateTestimonial(index);
  scheduleNext();
}

function scheduleNext() {
  const items = document.querySelectorAll('.testimonial-item');
  testimonialTimer = setTimeout(() => {
    const next = (testimonialIndex + 1) % items.length;
    activateTestimonial(next);
    scheduleNext();
  }, TESTIMONIAL_DURATION);
}

export function initTestimonials() {
  const section = document.querySelector('.testimonial');
  const dots = document.querySelectorAll('.dot');
  if (!section || !dots.length) return;

  dots.forEach((dot) => {
    dot.addEventListener('click', () => goToTestimonial(parseInt(dot.dataset.index)));
  });

  // Give the first quote its full reading time when the section comes into view.
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    if (section.classList.contains('is-rotating')) return;
    section.classList.add('is-rotating');
    activateTestimonial(testimonialIndex);
    scheduleNext();
  }, { threshold: 0.25 });

  observer.observe(section);
}
