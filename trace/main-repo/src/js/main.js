import { initCarousel } from './modules/carousel.js';
import { initLightbox, openLightbox, closeLightbox } from './modules/lightbox.js';
import { initModal, openModal, closeModal } from './modules/projects.js';
import { initTestimonials } from './modules/testimonials.js';
import { initThemeToggle } from './modules/theme.js';
import { initScrollAnimations } from './modules/scroll.js';
import { initServiceAccordion } from './modules/accordion.js';

// Expose lightbox functions globally for modal image click handlers
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.openModal = openModal;

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCarousel();
  initLightbox();
  initModal();
  initTestimonials();
  initScrollAnimations();
  initServiceAccordion();
});