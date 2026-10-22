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

function createLogo(logo, index) {
  const img = new Image();
  img.src = logo.src;
  img.alt = logo.alt;
  img.width = 100;
  img.height = 100;
  img.className = 'logo-img';
  img.style.setProperty('--logo-delay', `${index * STAGGER_MS}ms`);
  return img;
}

async function prepareSlide(logos) {
  const images = logos.map(createLogo);
  // Keep the current group in place until every replacement is decoded.
  await Promise.all(images.map(img => img.decode().catch(() => {})));
  return images;
}

async function animateSlide(slide, className) {
  slide.classList.add(className);
  await Promise.all(slide.getAnimations({ subtree: true }).map(animation =>
    animation.finished.catch(() => {})
  ));
  slide.classList.remove(className);
}

export async function initCarousel() {
  const slide = document.querySelector('.logo-slide');
  if (!slide) return;

  // Keep Apple centered in the first group, with a fresh order around it.
  const apple = LOGOS.find(logo => logo.alt === 'Apple');
  const rest = LOGOS.filter(logo => logo !== apple);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const logos = [rest[0], apple, ...rest.slice(1)];
  const preparedGroups = Array.from(
    { length: logos.length / SLIDE_SIZE },
    (_, index) => prepareSlide(logos.slice(index * SLIDE_SIZE, (index + 1) * SLIDE_SIZE))
  );
  slide.replaceChildren(...await preparedGroups[0]);
  const groups = await Promise.all(preparedGroups);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let groupIndex = 0;
  let timer;
  let transitioning = false;

  function schedule() {
    clearTimeout(timer);
    if (!document.hidden && !reducedMotion.matches && !transitioning) {
      timer = setTimeout(advance, INTERVAL_MS);
    }
  }

  async function advance() {
    transitioning = true;
    await animateSlide(slide, 'slide-out');
    groupIndex = (groupIndex + 1) % groups.length;
    slide.replaceChildren(...groups[groupIndex]);
    await animateSlide(slide, 'slide-in');
    transitioning = false;
    schedule();
  }

  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', schedule);
  schedule();
}
