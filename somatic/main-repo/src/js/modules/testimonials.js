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
    const wasActive = dot.classList.contains('active');
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
  const dots = document.querySelectorAll('.dot');
  if (!dots.length) return;

  dots.forEach((dot) => {
    dot.addEventListener('click', () => goToTestimonial(parseInt(dot.dataset.index)));
  });

  // Seed the first dot's timer fill
  const firstDot = dots[0];
  firstDot.style.setProperty('--duration', `${TESTIMONIAL_DURATION}ms`);

  scheduleNext();
}