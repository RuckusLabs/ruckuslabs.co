// Logo Carousel Module
const LOGOS = [
  { src: './src/images/logos/apple-full.svg', alt: 'Apple' },
  { src: './src/images/logos/avion-full.svg', alt: 'Tequila Avión' },
  { src: './src/images/logos/chicory-full.svg', alt: 'Chicory' },
  { src: './src/images/logos/f45-full.svg', alt: 'F45' },
  { src: './src/images/logos/journey-full.svg', alt: 'Journey' },
  { src: './src/images/logos/lawline-full.svg', alt: 'Lawline' },
  { src: './src/images/logos/otf-full.svg', alt: 'OTF' },
  { src: './src/images/logos/ptc-full.svg', alt: 'PTC' },
  { src: './src/images/logos/welcome-full.svg', alt: 'Welcome' },
  { src: './src/images/logos/molo-full.svg', alt: 'Molo' },
  { src: './src/images/logos/neso-full.svg', alt: 'Neso' },
  { src: './src/images/logos/schvitzin-full.svg', alt: 'Schvitzin' },
];

const SLIDE_SIZE = 3;
const INTERVAL_MS = 3000;
const STAGGER_MS = 80;
const ANIM_MS = 350;
const EXIT_WAIT_MS = STAGGER_MS * (SLIDE_SIZE - 1) + ANIM_MS; // 510ms

let carouselIndex = 0;

function renderSlide(slide, startIndex) {
  slide.innerHTML = '';
  for (let i = 0; i < SLIDE_SIZE; i++) {
    const logo = LOGOS[(startIndex + i) % LOGOS.length];
    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.className = 'logo-img';
    img.style.setProperty('--logo-delay', `${i * 80}ms`);
    slide.appendChild(img);
  }
}

function advanceCarousel() {
  const slide = document.querySelector('.logo-slide');
  if (!slide) return;

  slide.classList.add('slide-out');

  setTimeout(() => {
    carouselIndex = (carouselIndex + SLIDE_SIZE) % LOGOS.length;
    renderSlide(slide, carouselIndex);
    slide.classList.remove('slide-out');
    slide.classList.add('slide-in');

    setTimeout(() => {
      slide.classList.remove('slide-in');
    }, EXIT_WAIT_MS);
  }, EXIT_WAIT_MS);
}

export function initCarousel() {
  const slide = document.querySelector('.logo-slide');
  if (!slide) return;

  // Shuffle all logos except Apple, then place Apple at center of first group
  const apple = LOGOS.find(l => l.alt === 'Apple');
  const rest = LOGOS.filter(l => l.alt !== 'Apple');
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  LOGOS.splice(0, LOGOS.length, ...[rest[0], apple, ...rest.slice(1)]);

  renderSlide(slide, carouselIndex);
  setInterval(advanceCarousel, INTERVAL_MS);
}