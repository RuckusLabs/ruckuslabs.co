// Lightbox Module

export function openLightbox(src, title, caption) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('.lightbox-img').src = src;
  lb.querySelector('.lightbox-img').alt = title || '';
  lb.querySelector('.lightbox-title').textContent = title || '';
  lb.querySelector('.lightbox-desc').textContent = caption || '';
  lb.classList.add('open');
}

export function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
}

export function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
}