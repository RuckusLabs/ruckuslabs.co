// Project Data and Modal Module

const PROJECTS = {
  apple: {
    name: 'Apple',
    tag: 'Web Development',
    description: "Brand interaction design for Apple, with close attention to the small exchanges between a person and an interface.",
    logo: './src/images/logos/apple-mini.svg',
  },
  avion: {
    name: 'Tequila Avion',
    tag: 'Web Development',
    description: "Digital narrative and brand expression for Tequila Avión, a premium tequila brand.",
    logo: './src/images/logos/avion-full.svg',
  },
  chicory: {
    name: 'Chicory',
    tag: 'Brand Identity, Narrative, Web Development, Product Design',
    description: "Chicory needed an identity that could speak to grocery shoppers and the brands trying to reach them. We rebuilt the brand around that brief.",
    logo: './src/images/logos/chicory.svg',
    hero: './src/images/work/chicory/chicory-brand-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: "The identity had to work across Chicory's consumer and business offerings. We gathered input from across the team to establish a direction both could share.",
      },
      {
        heading: 'Logo',
        body: "The original chef's hat said cooking. The new lowercase wordmark and power-button 'c' give the technology a place in the identity. We developed the mark through a series of explorations with the team.",
        images: [
          { src: './src/images/work/chicory/chicory-old.jpg', title: 'Original Chicory Logo', caption: 'While effectively communicating the association with food and cooking, the original Chicory logo was severely outdated.' },
          { src: './src/images/work/chicory/chicory-new.jpg', title: 'New Chicory Logo', caption: 'The lowercase wordmark and power-button icon.' },
          { src: './src/images/work/chicory/team-explorations.jpg', title: 'Moodboard', caption: 'The executive team was asked to share logos they admired or thought were associated with Chicory\'s mission.' },
          { src: './src/images/work/chicory/logo-exploration.jpg', title: 'Iteration & Refinement', caption: 'The Chicory logo went through multiple iterations before ultimately reaching the final product.' },
        ],
      },
      {
        heading: 'Design System',
        body: "The guide sets out color usage, typography, and photo overlays. An angle taken from the logo gives the system a recurring shape, so new materials can be recognized as Chicory before anyone reads the name.",
        images: [
          { src: './src/images/work/chicory/guide-colors.jpg', title: 'Colors', caption: 'A focused guide to color usage.' },
          { src: './src/images/work/chicory/guide-typography.jpg', title: 'Typography', caption: 'Simplifying the number of fonts leads to a cleaner, more focused design.' },
          { src: './src/images/work/chicory/guide-overlay.jpg', title: 'Photo Overlay', caption: 'Color and gradient overlays help tie image families together.' },
          { src: './src/images/work/chicory/guide-angle.jpg', title: 'Angle', caption: 'A recurring angle taken from the logo geometry.' },
        ],
      },
      {
        heading: 'Iconography & Illustration',
        body: "We extended the identity into custom icons, commissioned illustrations, and pitch deck templates. Each draws on the same palette and geometry.",
        images: [
          { src: './src/images/work/chicory/chicory-deck-mockup.jpg', title: 'Pitch Deck', caption: 'A pitch deck derived from Chicory\'s design system.' },
          { src: './src/images/work/chicory/chicory-icons.jpg', title: 'Iconography', caption: 'A set of icons derived from Chicory\'s design system.' },
          { src: './src/images/work/chicory/chicory-illustration.jpg', title: 'Illustration', caption: 'Based upon Chicory\'s colors, a number of illustrations were commissioned for the brand.' },
        ],
      },
    ],
  },
  f45: {
    name: 'F45',
    tag: 'Digital Design',
    description: "A design system and web experience for F45 as its franchise network grew.",
    logo: './src/images/logos/f45-full.svg',
  },
  'get-outdoor-jobs': {
    name: 'Get Outdoor Jobs',
    tag: 'Brand Identity',
    description: "A job board for careers in the outdoor, environmental, and adventure industries. Our work centered on its brand identity.",
    logo: './src/images/logos/get-outdoor-jobs-mini.svg',
    link: 'https://getoutdoorjobs.com',
    sections: [
      {
        heading: 'Brand & Identity',
        body: "The identity needed to address employers and candidates alike. We developed a mark around movement and a palette drawn from the natural environment.",
      },
    ],
  },
  'glamping-on-wine': {
    name: 'Glamping on Wine',
    tag: 'Brand Identity, Narrative, Web Design',
    description: "Glamping on Wine brings together places to stay at wineries and vineyards. We developed its identity and website around the setting.",
    logo: './src/images/logos/glamping-on-wine-mini.svg',
    link: 'https://glampingonwine.com',
    sections: [
      {
        heading: 'Scope',
        body: "Sleeping among the vines was the premise. We approached the identity as a wine brand, with the landscape doing much of the work.",
      },
      {
        heading: 'Brand Identity',
        body: "A restrained wordmark and palette leave space for the photography. The imagery establishes the mood of a stay before the site introduces its practical details.",
      },
      {
        heading: 'Web Experience',
        body: "The site leads with the properties and their surroundings. Booking follows a short sequence: choose a property, choose dates, confirm.",
      },
    ],
  },
  'job-boardly': {
    name: 'Job Boardly',
    tag: 'Brand Identity, Web Design',
    description: "We redesigned Job Boardly's landing page and proposed a friendlier identity for its platform of community job boards.",
    logo: './src/images/logos/jb-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: "Job Boardly lets communities run their own job boards without building the software. The landing page needed to make that proposition clear and give prospective customers a reason to try it.",
        images: [
          { src: './src/images/work/job-boardly/landing-page.jpg', title: 'Landing Page', caption: 'The redesigned Job Boardly landing page.' },
        ],
      },
    ],
  },
  journey: {
    name: 'Journey',
    tag: 'Product Design',
    description: "A pitch deck for Journey's initial fundraising round, setting out the product and its market opportunity.",
    logo: './src/images/logos/journey-full.svg',
  },
  lawline: {
    name: 'Lawline',
    tag: 'Digital Development, Product Design, Design System',
    description: "Lawline brought design into the team to rethink its continuing legal education platform. We worked on the course pages, catalog, and credit tracker, establishing a design system along the way.",
    logo: './src/images/logos/lawline.svg',
    hero: './src/images/work/lawline/lawline-web-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: "Design had previously been handled as needed by freelancers. Our first work as the dedicated design role focused on course details and bundles, establishing patterns the rest of the product could use.",
      },
      {
        heading: 'Design System',
        body: "Open Sans, generous spacing, and consistent component rules gave the product a shared structure. The system had to accommodate dense course information while keeping it easy to read.",
        images: [
          { src: './src/images/work/lawline/typography.jpg', title: 'Typography', caption: 'The Lawline product is based around the flexible Open Sans font family.' },
          { src: './src/images/work/lawline/course-details-teaser.jpg', title: 'Course Details Page', caption: 'Using Lawline\'s design system to quickly build pages.' },
        ],
      },
      {
        heading: 'Course Catalog',
        body: "The catalog is where users find their next course. Section headings, course cards, and quick filters organize the collection around browsing and selection.",
        images: [
          { src: './src/images/work/lawline/catalog-screenshot.jpg', title: 'Course Catalog', caption: 'The Course Catalog serves as a library of content for users.' },
        ],
      },
      {
        heading: 'Course Card',
        body: "One card handles on-demand courses, live broadcasts, and bundles. Its button changes with the viewer: a visitor sees a purchase option; a subscriber gets access. The component keeps those different paths in the same place.",
        images: [
          { src: './src/images/work/lawline/card-logged-out.jpg', title: 'Base Course Card', caption: 'The logged-out experience shows the price and other essential information.' },
          { src: './src/images/work/lawline/card-logged-in.jpg', title: 'Dynamic Course Card', caption: 'For logged-in users, the Course Card shows pertinent CTAs.' },
        ],
      },
      {
        heading: 'Credit Tracker',
        body: "Lawyers can have continuing education requirements in several states at once. The tracker brings their progress, requirements, and certificates into a single view.",
        images: [
          { src: './src/images/work/lawline/cle-tracker.jpg', title: 'Credit Tracker', caption: 'Allows users to track their progress and completion across multiple states.' },
        ],
      },
    ],
  },
  'lawline-app': {
    name: 'Lawline iOS & Android',
    tag: 'Digital Development, Product Design, Design System',
    description: "We brought Lawline's continuing legal education platform to iOS and Android using React Native, carrying its web features onto smaller screens.",
    logo: './src/images/logos/lawline.svg',
    hero: './src/images/work/lawline-app/lawline-app-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: "The mobile apps needed to offer the same features as the web product. React Native let us develop both together, with each platform's conventions guiding the interface.",
      },
      {
        heading: 'Translating a Visual Language',
        body: "The web system had to fit a four-inch screen. We adjusted type, spacing, and components while retaining the patterns existing Lawline users knew.",
        images: [
          { src: './src/images/work/lawline-app/lawline-ios.png', title: 'iOS', caption: 'Lawline on iOS with React Native.' },
          { src: './src/images/work/lawline-app/lawline-android.png', title: 'Android', caption: 'Lawline on Android with React Native.' },
        ],
      },
      {
        heading: 'Learning On-The-Go',
        body: "The course player puts playback controls within thumb reach and leaves the slides easy to follow. It supports listening during commutes, between hearings, and away from a desk.",
        images: [
          { src: './src/images/work/lawline-app/lawline-ios-player.png', title: 'Course Player', caption: 'A simple interface to view slides and control playback.' },
        ],
      },
      {
        heading: 'Getting Work Done',
        body: "SmartNotes uses action sheets and swipe gestures to make notes manageable on a phone. Course materials and synchronized presentations complete the mobile workflow.",
        images: [
          { src: './src/images/work/lawline-app/lawline-ios-smartnotes.png', title: 'SmartNotes', caption: 'Browsing all SmartNotes.' },
          { src: './src/images/work/lawline-app/lawline-ios-smartnotes-edit.png', title: 'SmartNotes Actions', caption: 'Action sheets for editing and managing notes.' },
        ],
      },
    ],
  },
  'little-herb-places': {
    name: 'Little Herb Places',
    tag: 'Brand Identity, Narrative, Web Design',
    description: "Identity and a direct-to-consumer website for Little Herb Places, a small-batch herbal goods brand.",
    link: 'https://littleherbplaces.com',
    logo: './src/images/logos/little-herb-places-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: "The founder had spent years developing tinctures, teas, and topicals using herbs she'd grown up with. We gave that existing work an identity and a place to sell it.",
      },
      {
        heading: 'Brand Identity',
        body: "Earthy tones, botanical motifs, and a wordmark with a printed quality carry through the labels, packaging, and website. The handmade character of the products sets the terms.",
      },
    ],
  },
  molo: {
    name: 'Molo',
    tag: 'Brand Identity, Narrative, Design System',
    description: "Campaign concepts, digital ads, and editorial layouts for Molo, supported by a shared brand and design system.",
    logo: './src/images/logos/molo-mini.svg',
    sections: [
      {
        heading: 'Marketing Materials',
        body: "We worked with the marketing team on digital ads, social graphics, and email templates. Reusable layouts gave the team a way to produce new materials within the identity.",
      },
      {
        heading: 'Narrative',
        body: "Molo's audience spans outdoor enthusiasts, city dwellers, and parents. We organized the narrative around the experience of using its products, giving the campaigns a subject beyond the object itself.",
      },
    ],
  },
  neso: {
    name: 'Neso',
    tag: 'Brand Identity, Narrative',
    description: "Visual identity work for Neso's beach shelters as the brand expanded into wider retail distribution.",
    logo: './src/images/logos/neso-mini.svg',
    link: 'https://neso.com',
    linkText: 'Visit Neso',
    sections: [
      {
        body: "Neso had grown through word of mouth. We refined the logo and visual guidelines to give that reputation a consistent expression as the brand reached new retailers.",
      }
    ]
  },
  'old-landing': {
    name: 'Old Landing',
    tag: 'Brand Identity, Narrative',
    description: "An identity and product concepts for Old Landing, a proposed outdoor gear and apparel brand.",
    logo: './src/images/logos/old-landing-mini.svg',
    sections: [
      {
        images: [
          { src: './src/images/work/old-landing/old-landing-hero.jpg', title: 'Old Landing Logo', caption: 'The Old Landing identity concept.' },
        ]
      }
    ]
  },
  otf: {
    name: 'Orangetheory Fitness',
    tag: 'Digital Design',
    description: "Digital design work for Orangetheory Fitness, communicating its heart rate-based training method.",
    logo: './src/images/logos/otf-full.svg',
  },
  ptc: {
    name: 'PTC',
    tag: 'AR Design and Development',
    description: "Design and development work for PTC, helping explain its industrial IoT and digital transformation products.",
    logo: './src/images/logos/ptc-full.svg',
  },
  schvitzin: {
    name: 'Schvitzin\'',
    tag: 'Brand · Digital',
    description: "Identity and a digital presence for Schvitzin', a sauna headgear brand with an appetite for heat and humor.",
    logo: './src/images/logos/schvitzin-full.svg',
    hero: './src/images/work/schvitzin/schvitzin-hero.png',
    sections: [
      {
        heading: 'Scope',
        body: "Sauna headgear gave us a specific object to build the brand around. The identity and website bring warmth, humor, and a social character to the product.",
      },
      {
        heading: 'Brand Identity',
        body: "Expressive type and a warm palette carry the name's personality into the graphics. The faces, heritage, and retro treatments give the identity several registers to work in.",
        images: [
          { src: './src/images/work/schvitzin/faces-graphic.jpg', title: 'Faces Graphic', caption: 'The Schvitzin brand identity.' },
          { src: './src/images/work/schvitzin/heritage-graphic.jpg', title: 'Heritage Graphic', caption: 'A warm palette anchored by expressive typography.' },
          { src: './src/images/work/schvitzin/retro-graphic.jpg', title: 'Retro Graphic', caption: 'A warm palette anchored by expressive typography.' },
        ],
      },
    ],
  },
  somatic: {
    name: 'Somatic',
    tag: 'Branding, Product, Development',
    description: "Somatic brings workout tracking and on-device coaching to iPhone. It connects strength training, cardio, and recovery history in one place, with Apple Health integration.",
    logo: '/src/images/logos/somatic-colorized.svg',
    hero: './src/images/work/somatic/somatic-hero.png',
    link: 'https://ruckuslabs.co/somatic',
    linkText: 'Visit Somatic',

    sections: [
      {
        heading: 'Design',
        body: "Built for iOS, Somatic uses Liquid Glass to organize sessions and training history. Depth and translucency establish hierarchy while leaving the workout itself easy to follow.",
      },
      {
        heading: 'Privacy',
        body: "Soma, the on-device coach, uses recent sessions and recovery to suggest what to train. Coaching runs locally, and workouts connect directly to Apple Health. No account or server sync is required.",
      },
      {
        heading: 'Development',
        body: "AI-assisted development shortened the cycle between design and a working build. We used that cycle to refine session logging and the interface around it.",
      },
      {
        images: [
          { src: './src/images/work/somatic/trio-hero.png', title: '' },
        ],
      }
    ],
  },
  sourced: {
    name: 'Sourced Adventures',
    tag: 'Brand Identity, Narrative, Product Design',
    description: "Sourced Adventures began with a brief from founder Kyle: high-energy. We built an identity and booking experience for New Yorkers looking to get out of the city.",
    logo: './src/images/logos/sourced-adventures.svg',
    hero: './src/images/work/sourced-adventures/sa-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: "The business began after a similar LivingSocial offering closed. Its early trips took New Yorkers beyond the city; the platform later expanded to international destinations and private trips.",
      },
      {
        heading: 'Branding & Logo',
        body: "Kyle arrived with a logo sketch. We developed it into the launch mark, with skiing as a reference to the earliest trips. Subsequent refinements have kept that original structure.",
        images: [
          { src: './src/images/work/sourced-adventures/sa-logo.jpg', title: 'Sourced Adventures Logo', caption: 'The first iteration of the Sourced Adventures logo.' },
          { src: './src/images/work/sourced-adventures/sa-skiing.jpg', title: 'Homage', caption: 'Skiing has been central to the Sourced Adventures brand since the beginning.' },
        ],
      },
      {
        heading: 'Creating a Lifestyle',
        body: "Trip photography carries the energy of the destinations. Typography and page structure help visitors browse the trips and understand what to expect from a guided experience.",
        images: [
          { src: './src/images/work/sourced-adventures/screen-1.jpg' },
          { src: './src/images/work/sourced-adventures/screen-2.jpg' },
        ],
      },
    ],
  },
  trace: {
    name: 'Trace',
    tag: 'Product · Brand · Web',
    description: "Trace overlays screenshots on any app so designers and developers can compare an implementation pixel by pixel. Built for macOS.",
    logo: './src/images/logos/trace-mini.svg',
    hero: './src/images/work/trace/trace-hero.png',
    link: 'https://ruckuslabs.co/trace/',
    linkText: 'Download',
    logoFilter: 'none',
    sections: [
      {
        heading: 'Design',
        body: "Trace follows macOS 26's interface conventions. Native patterns and custom components keep the controls familiar while the overlay does its work.",
      },
      {
        heading: 'Development',
        body: "Built in Swift and SwiftUI, with AI-assisted development.",
      },
      {
        images: [
          { src: './src/images/work/trace/step-1.png', },
        ],
      },
      {
        images: [
          { src: './src/images/work/trace/step-2.png', },
        ],
      },
      {
        images: [
          { src: './src/images/work/trace/step-3.png', },
        ],
      }
    ],
  },
  transaccts: {
    name: 'Transaccts',
    tag: 'Web Development, Design System',
    description: "A tax and accounting interface for long-haul truck drivers. We began with a Progressive Web App and a practical workflow: photograph a receipt, check the amounts, submit it.",
    logo: './src/images/logos/transaccts.svg',
    hero: './src/images/work/transaccts/transaccts-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: "The first release was a Progressive Web App to validate the concept across devices. We kept future iOS and Android apps in mind while developing the interface.",
      },
      {
        heading: 'Research & Discovery',
        body: "Research centered on the receipt workflow: take a photo, confirm the itemized amounts, wait for approval. The feed and detail pages keep those steps easy to find for drivers working away from a desk.",
        images: [
          { src: './src/images/work/transaccts/transaccts-mobile.jpg', title: 'Mobile Overview', caption: 'An overview of all screens accessible via mobile devices.' },
          { src: './src/images/work/transaccts/transaccts-desktop.jpg', title: 'Desktop Overview', caption: 'Being a PWA, functional parity is kept between desktop and mobile.' },
        ],
      },
      {
        heading: 'Automagic',
        body: "OCR extracts products, categories, and prices from an uploaded receipt. The interface leaves that processing in the background and keeps Add Receipt available throughout, so the next transaction is always close at hand.",
        images: [
          { src: './src/images/work/transaccts/Add Transaction.jpg', title: 'Add Transaction', caption: 'Adding a transaction is as simple as pressing a button.' },
          { src: './src/images/work/transaccts/Camera.jpg', title: 'Upload Image', caption: 'After an image is uploaded, it\'s scanned with OCR technology.' },
          { src: './src/images/work/transaccts/Per Diem.jpg', title: 'Reporting', caption: 'Viewing transaction details via the calendar.' },
        ],
      },
    ],
  },
  'very-cool-weekly': {
    name: 'Very Cool Weekly',
    tag: 'Brand Identity, Digital Design, Web Development',
    description: "Very Cool Weekly is a newsletter about cool things. We designed its identity and email template.",
    link: 'https://damianmakki.github.io/verycoolweekly/',
    logo: './src/images/logos/very-cool-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: "The identity gives the newsletter a recognizable presence in the inbox. The template puts the curated links first and gives each issue a structure to work within.",
      }
    ]
  },
  welcome: {
    name: 'Welcome',
    tag: 'Product Design',
    description: "Presentation templates for Welcome's sales teams, with reusable layouts they could update themselves.",
    logo: './src/images/logos/welcome-full.svg',
  },
};

// Modal DOM helpers
function getModalElements() {
  const modal = document.getElementById('project-modal');
  if (!modal) return null;
  return {
    modal,
    heroWrap: modal.querySelector('.modal-hero-wrap'),
    heroImg: modal.querySelector('.modal-hero'),
    logoImg: modal.querySelector('.modal-logo'),
    imagesEl: modal.querySelector('.modal-images'),
    titleEl: modal.querySelector('.modal-title'),
    tagEl: modal.querySelector('.modal-tag'),
    descEl: modal.querySelector('.modal-description'),
    linkEl: modal.querySelector('.modal-link'),
    sectionsEl: modal.querySelector('.modal-sections'),
  };
}

// Build section HTML for modal
function buildSection({ heading, body, images }) {
  const div = document.createElement('div');
  div.className = 'modal-section';

  if (heading) {
    const h = document.createElement('p');
    h.className = 'modal-section-heading';
    h.textContent = heading;
    div.appendChild(h);
  }

  const p = document.createElement('p');
  p.className = 'modal-section-body';
  p.textContent = body;
  div.appendChild(p);

  if (images && images.length) {
    const grid = document.createElement('div');
    grid.className = 'modal-images';
    images.forEach(({ src, title = '', caption = '' }) => {
      const item = document.createElement('div');
      item.className = 'modal-image-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', title ? `Zoom: ${title}` : 'Zoom image');

      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      item.appendChild(img);

      if (title || caption) {
        const cap = document.createElement('div');
        cap.className = 'modal-image-caption';
        if (title) {
          const t = document.createElement('span');
          t.className = 'modal-image-title';
          t.textContent = title;
          cap.appendChild(t);
        }
        if (caption) {
          const d = document.createElement('span');
          d.className = 'modal-image-desc';
          d.textContent = caption;
          cap.appendChild(d);
        }
        item.appendChild(cap);
      }

      // Import openLightbox dynamically to avoid circular deps
      item.addEventListener('click', () => {
        window.openLightbox?.(src, title, caption);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.openLightbox?.(src, title, caption);
        }
      });
      grid.appendChild(item);
    });
    div.appendChild(grid);
  }

  return div;
}

export function openModal(slug) {
  const data = PROJECTS[slug];
  if (!data) return;

  const el = getModalElements();
  if (!el) return;

  const { heroWrap, heroImg, logoImg, imagesEl, titleEl, tagEl, descEl, linkEl, sectionsEl } = el;

  if (data.hero) {
    heroImg.src = data.hero;
    heroImg.alt = data.name;
    heroWrap.style.display = '';
    logoImg.style.display = 'none';
  } else {
    heroWrap.style.display = 'none';
    logoImg.src = data.logo;
    logoImg.alt = data.name;
    logoImg.style.display = '';
    logoImg.style.filter = data.logoFilter !== undefined ? data.logoFilter : '';
  }

  titleEl.textContent = data.name;
  tagEl.textContent = data.tag;
  descEl.textContent = data.description;

  // Reset link first, then conditionally show
  linkEl.removeAttribute('href');
  linkEl.classList.remove('button');
  linkEl.textContent = '';
  linkEl.style.display = 'none';

  if (data.link) {
    linkEl.href = data.link;
    linkEl.classList.add('button');
    linkEl.textContent = data.linkText || 'Visit';
    linkEl.style.display = '';
  }

  // Global image strip is no longer used — images live inside sections
  imagesEl.innerHTML = '';

  sectionsEl.innerHTML = '';
  if (data.sections && data.sections.length) {
    sectionsEl.style.display = '';
    data.sections.forEach(section => {
      sectionsEl.appendChild(buildSection(section));
    });
  } else {
    sectionsEl.style.display = 'none';
  }

  el.modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  el.modal.querySelector('.modal-inner').focus();
}

export function closeModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

export function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Close on backdrop click
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  // Close button
  modal.querySelector('.modal-close').addEventListener('click', closeModal);

  // Close on Escape (lightbox takes priority over modal)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('open')) {
      window.closeLightbox?.();
      return;
    }
    if (modal.classList.contains('open')) closeModal();
  });

  // Open on project row click (latest + archives)
  document.querySelectorAll('.project-row, .archive-row').forEach((row) => {
    row.addEventListener('click', () => openModal(row.dataset.project));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(row.dataset.project);
      }
    });
  });
}