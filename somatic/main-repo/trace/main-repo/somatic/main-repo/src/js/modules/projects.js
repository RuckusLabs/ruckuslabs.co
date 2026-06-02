// Project Data and Modal Module

const PROJECTS = {
  apple: {
    name: 'Apple',
    tag: 'Web Development',
    description: 'An engagement with Apple focused on brand interaction design — crafting moments and micro-experiences that uphold Apple\'s standard of precision and delight.',
    logo: './src/images/logos/apple-mini.svg',
  },
  avion: {
    name: 'Tequila Avion',
    tag: 'Web Development',
    description: 'Tequila Avión is a premium brand with a story worth telling. We helped shape their digital narrative and brand expression to match the craftsmanship behind every bottle.',
    logo: './src/images/logos/avion-full.svg',
  },
  chicory: {
    name: 'Chicory',
    tag: 'Brand Identity, Narrative, Web Development, Product Design',
    description: 'When Chicory set out to revolutionize the grocery shopping space, they needed a brand capable of keeping up. We led a full rebuild — bringing together input from senior and junior team members to craft an identity that crosses business initiatives without losing focus.',
    logo: './src/images/logos/chicory.svg',
    hero: './src/images/work/chicory/chicory-brand-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: 'Chicory needed to be many things at once: technologically advanced, attractive to both users and brands, modern, forward, and tech-enabled. Building a brand around those ideas takes a village — the input and guidance from senior and junior team members alike was vital to creating an identity capable of crossing business initiatives. Chicory\'s new identity is a product of focused research, strategy, and execution, conveying the foundational values of a company built to tackle the future of grocery.',
      },
      {
        heading: 'Logo',
        body: 'The original Chicory logo was playful but dated — its chef\'s hat communicated cooking but missed the company\'s tech-forward ambition entirely. We replaced it with a bold lowercase wordmark anchored by a "c" icon that doubles as a digital power button, making the brand\'s always-on, always-working ethos instantly legible. The new icon also plays with the "c" turned on its side — a nod to Chicory\'s mission to challenge the business-as-usual mentality in grocery. The final mark was a product of collaborative input and multiple iterations.',
        images: [
          { src: './src/images/work/chicory/chicory-old.jpg', title: 'Original Chicory Logo', caption: 'While effectively communicating the association with food and cooking, the original Chicory logo was severely outdated.' },
          { src: './src/images/work/chicory/chicory-new.jpg', title: 'New Chicory Logo', caption: 'The new logo embodies the tech-forward nature of Chicory.' },
          { src: './src/images/work/chicory/team-explorations.jpg', title: 'Moodboard', caption: 'The executive team was asked to share logos they admired or thought were associated with Chicory\'s mission.' },
          { src: './src/images/work/chicory/logo-exploration.jpg', title: 'Iteration & Refinement', caption: 'The Chicory logo went through multiple iterations before ultimately reaching the final product.' },
        ],
      },
      {
        heading: 'Design System',
        body: 'To keep the team equipped to scale, we built a complete styleguide — focused color usage, simplified typography, photo overlay guidance, and a distinctive angled motif derived from the logo geometry. Every element was documented so future design decisions had a foundation to build from rather than a blank slate.',
        images: [
          { src: './src/images/work/chicory/guide-colors.jpg', title: 'Colors', caption: 'A focused guide to color usage.' },
          { src: './src/images/work/chicory/guide-typography.jpg', title: 'Typography', caption: 'Simplifying the number of fonts leads to a cleaner, more focused design.' },
          { src: './src/images/work/chicory/guide-overlay.jpg', title: 'Photo Overlay', caption: 'Color and gradient overlays help tie image families together.' },
          { src: './src/images/work/chicory/guide-angle.jpg', title: 'Angle', caption: 'Based off an angle found in the logo, the angle gives photos a distinctive flair unique to Chicory.' },
        ],
      },
      {
        heading: 'Iconography & Illustration',
        body: 'As the brand matured, we extended it into a custom icon set and commissioned illustrations that live within the color system. Later, pitch deck templates were designed on the same foundation — ensuring the brand showed up consistently whether on screen, in a deck, or in a boardroom.',
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
    description: 'We helped F45 evolve their digital presence to match their explosive global growth — crafting a design system and web experience that communicates community, performance, and franchise ambition.',
    logo: './src/images/logos/f45-full.svg',
  },
  'get-outdoor-jobs': {
    name: 'Get Outdoor Jobs',
    tag: 'Brand Identity',
    description: 'Get Outdoor Jobs is a focused job board connecting people with careers in the outdoor, environmental, and adventure industries. We designed and built the platform with an emphasis on community over volume — surfacing relevant opportunities without the noise of a general-purpose board.',
    logo: './src/images/logos/get-outdoor-jobs-mini.svg',
    link: 'https://getoutdoorjobs.com',
    sections: [
      {
        heading: 'Brand & Identity',
        body: 'The brand needed to feel credible to both sides of the marketplace — outdoor companies posting jobs and candidates applying for them. We built a mark that communicates movement and purpose without relying on predictable outdoor clichés. The palette draws from the natural environment without being literal about it.',
      },
    ],
  },
  'glamping-on-wine': {
    name: 'Glamping on Wine',
    tag: 'Brand Identity, Narative, Web Design',
    description: 'Glamping on Wine is a curated marketplace for luxury camping experiences at wineries and vineyards. We built the brand and a web presence designed to make the booking process feel as indulgent as the experience itself.',
    logo: './src/images/logos/glamping-on-wine-mini.svg',
    link: 'https://glampingonwine.com',
    sections: [
      {
        heading: 'Scope',
        body: 'The concept was clear from the start: sleeping outdoors, surrounded by vines, with a glass of something local in hand. The challenge was building a brand that could communicate that fantasy without defaulting to the rustic-chic tropes that saturate the glamping space. We set out to make it feel more like a boutique wine brand than a campground.',
      },
      {
        heading: 'Brand Identity',
        body: 'The identity balances two worlds — the organic warmth of wine culture and the elevated outdoor aesthetic of high-end glamping. We used a refined wordmark, a restrained but inviting palette, and photography direction that prioritizes mood over product. The result reads as premium without feeling inaccessible.',
      },
      {
        heading: 'Web Experience',
        body: 'The website is built to convert browsers into bookers — and browsers into daydreamers first. The experience is organized around the landscape and the feeling before it gets to the logistics. We kept the booking flow tight: pick a property, pick dates, book. The fewer steps between landing page and confirmation, the better.',
      },
    ],
  },
  'job-boardly': {
    name: 'Job Boardly',
    tag: 'Brand Identity, Web Design',
    description: 'Job Boardly is a modern job board platform designed for niche markets and independent communities. We rebuilt the site landing page and propsed an entirely new fun, friendly branding scheme.',
    logo: './src/images/logos/jb-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: 'Generic job boards serve everyone and no one well. Job Boardly was conceived as infrastructure — a platform that lets any community or niche vertical spin up a focused, well-designed job board without engineering overhead. We designed the landing page to entice new customers and the product to feel like a natural extension of the communities it serves — whether that\'s outdoor jobs, design jobs, or anything in between.',
        images: [
          { src: './src/images/work/job-boardly/landing-page.jpg', title: 'Landing Page', caption: 'A clean landing page optimized for speed, clarity, and conversion' },
        ],
      },
    ],
  },
  journey: {
    name: 'Journey',
    tag: 'Product Design',
    description: 'Journey needed a pitch deck during their initial fundraising round. We designed a deck that clearly communicated the product\'s value proposition and market potential, helping them secure the investment they needed to get off the ground.',
    logo: './src/images/logos/journey-full.svg',
  },
  lawline: {
    name: 'Lawline',
    tag: 'Digital Development, Product Design, Design System',
    description: 'The Lawline service is used by well over 100,000 lawyers who pay monthly to access content and complete CLE courses. The designer role was a brand new position — design had previously been done ad-hoc, never a real part of the process. The goal: futurize the product so far ahead of competitors that customers immediately felt the difference.',
    logo: './src/images/logos/lawline.svg',
    hero: './src/images/work/lawline/lawline-web-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: 'The designer role at Lawline was a brand new position — design had previously been ad-hoc, relying on freelancers when necessary, and was never a meaningful part of the process. With responsibility for leading design direction end-to-end, the first priority was redesigning the two core products: the course details and bundles pages. These were an evolution of existing content, informed by industry best practices, and tied together under a cohesive visual language.',
      },
      {
        heading: 'Design System',
        body: 'Without a clear visual direction, building a modern, tech-forward product was impossible. We established bold and clear typography, generous spacing around UI components, and a consistent visual language — the foundation that everything else was built on. Open Sans became the typographic backbone: flexible, legible, and professional without being stiff.',
        images: [
          { src: './src/images/work/lawline/typography.jpg', title: 'Typography', caption: 'The Lawline product is based around the flexible Open Sans font family.' },
          { src: './src/images/work/lawline/course-details-teaser.jpg', title: 'Course Details Page', caption: 'Using Lawline\'s design system to quickly build pages.' },
        ],
      },
      {
        heading: 'Course Catalog',
        body: 'Beyond the course player itself, the Course Catalog was the highest-traffic touchpoint in the product — the place users go to discover new content. The design approach centered on embedding course cards in a logical structure, pairing clear section headings with quick filter controls to make browsing feel effortless. Everything was intentionally laid out to surface the right content at the right moment.',
        images: [
          { src: './src/images/work/lawline/catalog-screenshot.jpg', title: 'Course Catalog', caption: 'The Course Catalog serves as a library of content for users.' },
        ],
      },
      {
        heading: 'Course Card',
        body: 'One of the most pervasive components in Lawline\'s product, the Course Card was designed to feel like a physical object — research showed the typical user skewed older and less technically inclined, so creating a tangible-like connection was integral to the UI. Cards were built to be flexible: a single design handles on-demand content, live broadcasts, and bundles. The call-to-action adapts automatically across user states — logged out, single purchaser, unlimited subscriber — keeping the interaction model simple: click the button, and the system handles the rest.',
        images: [
          { src: './src/images/work/lawline/card-logged-out.jpg', title: 'Base Course Card', caption: 'The logged-out experience shows the price and other essential information.' },
          { src: './src/images/work/lawline/card-logged-in.jpg', title: 'Dynamic Course Card', caption: 'For logged-in users, the Course Card shows pertinent CTAs.' },
        ],
      },
      {
        heading: 'Credit Tracker',
        body: 'The Credit Tracker was a breakthrough for the industry — giving users a glanceable view of their continuing education progress across multiple states, with quick links to requirements and course certificates. We designed the full UI end-to-end, turning a genuinely complex compliance workflow into something that felt simple and manageable.',
        images: [
          { src: './src/images/work/lawline/cle-tracker.jpg', title: 'Credit Tracker', caption: 'Allows users to track their progress and completion across multiple states.' },
        ],
      },
    ],
  },
  'lawline-app': {
    name: 'Lawline iOS & Android',
    tag: 'Digital Development, Product Design, Design System',
    description: 'To stay ahead of an industry defined by legacy software, Lawline brought their CLE platform to mobile with native iOS and Android apps built on React Native — keeping full feature parity with the web product while respecting each platform\'s design conventions.',
    logo: './src/images/logos/lawline.svg',
    hero: './src/images/work/lawline-app/lawline-app-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: 'Keeping feature parity with Lawline\'s flagship web application was a central constraint throughout the project. At the same time, we had to respect the design conventions of both iOS and Android — creating something that felt native on each platform while still reading unmistakably as Lawline. Building on React Native let us co-develop both apps simultaneously without sacrificing quality on either side.',
      },
      {
        heading: 'Translating a Visual Language',
        body: 'Every core feature from the web product needed to work on a 4-inch screen. We translated Lawline\'s established design system into a mobile context — adapting spacing, typography, and component patterns to feel at home on glass while remaining consistent with what web users already knew.',
        images: [
          { src: './src/images/work/lawline-app/lawline-ios.png', title: 'iOS', caption: 'Lawline on iOS with React Native.' },
          { src: './src/images/work/lawline-app/lawline-android.png', title: 'Android', caption: 'Lawline on Android with React Native.' },
        ],
      },
      {
        heading: 'Learning On-The-Go',
        body: 'The course player is where users spend most of their time — listening to CLE content during commutes, between hearings, or at the gym. We designed a flexible, focused playback interface that puts the essential controls within thumb reach and keeps distractions out of the way.',
        images: [
          { src: './src/images/work/lawline-app/lawline-ios-player.png', title: 'Course Player', caption: 'A simple interface to view slides and control playback.' },
        ],
      },
      {
        heading: 'Getting Work Done',
        body: 'SmartNotes — Lawline\'s proprietary note-taking system — needed a thoughtful mobile translation. We leaned into native UI patterns like action sheets and swipe gestures to make the experience feel fluid rather than ported. Course Materials and presentation syncing rounded out the feature set, giving users a complete professional tool, not just a player.',
        images: [
          { src: './src/images/work/lawline-app/lawline-ios-smartnotes.png', title: 'SmartNotes', caption: 'Browsing all SmartNotes.' },
          { src: './src/images/work/lawline-app/lawline-ios-smartnotes-edit.png', title: 'SmartNotes Actions', caption: 'Leveraging native UI patterns when appropriate.' },
        ],
      },
    ],
  },
  'little-herb-places': {
    name: 'Little Herb Places',
    tag: 'Brand Identity, Narrative, Web Design',
    description: 'Little Herb Places is a small-batch herbal goods brand rooted in accessibility and curiosity. We built the brand identity and a direct-to-consumer web presence that communicates the care behind every product without taking itself too seriously.',
    link: 'https://littleherbplaces.com',
    logo: './src/images/logos/little-herb-places-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: 'The founder came to us with a product line she\'d been quietly building for years — tinctures, teas, and topicals made with herbs she\'d grown up using. What she needed wasn\'t a rebrand of what she\'d been doing. It was a way to communicate it: a visual language and web presence that made the products feel as considered as they actually were.',
      },
      {
        heading: 'Brand Identity',
        body: 'The brand leans into the handmade and the human. We built a system around earthy tones, botanical motifs, and a wordmark that feels printed rather than digital. Nothing is precious — labels, packaging, and the web presence all share the same loose, lived-in quality. It\'s a brand that invites you in rather than puts you on notice.',
      },
    ],
  },
  molo: {
    name: 'Molo',
    tag: 'Brand Identity, Narrative, Design System',
    description: 'Molo\'s growth was exploding and their marketing materials weren\'t keeping up. We built a brand and design system that let the work speak for itself — creating campaign concepts, digital ads, and editorial layouts that let the products take center stage rather than narrate them.',
    logo: './src/images/logos/molo-mini.svg',
    sections: [
      {
        heading: 'Marketing Materials',
        body: 'Working with Molo\'s marketing team, we developed a series of campaign assets that could be used across platforms — digital ads, social media graphics, email templates, and more. The goal was to create materials that felt as intentional and well-crafted as the products themselves, without needing a designer for every update.',
      },
      {
        heading: 'Narrative',
        body: 'The customer base for Molo\'s products is incredibly diverse — from outdoor enthusiasts to urban dwellers, parents to adventurers. We built a brand narrative that could speak to all of those audiences without feeling generic. The focus was on the experience of using the products — the moments of connection, discovery, and joy they facilitate — rather than the products themselves.',
      },
    ],
  },
  neso: {
    name: 'Neso',
    tag: 'Brand Identity, Narrative',
    description: 'Neso makes some of the most beloved beach shelters in the outdoor market. We worked on a focused branding engagement — refining the visual identity to match the product\'s premium positioning as the brand began scaling into broader retail distribution.',
    logo: './src/images/logos/neso-mini.svg',
    link: 'https://neso.com',
    linkText: 'Visit Neso',
    sections: [
      {
        body: 'Neso\'s beach tents had developed a loyal customer base largely through word of mouth — people bought them, used them, and immediately recommended them to friends. The product was exceptional. What needed work was the brand system surrounding it: a logo that scaled well, and visual guidelines strong enough to not break in the wind.',
      }
    ]
  },
  'old-landing': {
    name: 'Old Landing',
    tag: 'Brand Identity, Narrative',
    description: 'Old Landing was a concept for a direct-to-consumer brand of outdoor gear and apparel. We developed the brand identity and a series of product concepts that captured the spirit of adventure and exploration inherent in the name.',
    logo: './src/images/logos/old-landing-mini.svg',
    sections: [
      {
        images: [
          { src: './src/images/work/old-landing/old-landing-hero.jpg', title: 'Old Landing Logo', caption: 'The Old Landing logo was designed to feel rugged and timeless.' },
        ]
      }
    ]
  },
  otf: {
    name: 'Orangetheory Fitness',
    tag: 'Digital Design',
    description: 'Orangetheory Fitness asked us to help with various design tasks – translating their heart rate-based methodology into a compelling digital story — making the science accessible and the brand aspirational.',
    logo: './src/images/logos/otf-full.svg',
  },
  ptc: {
    name: 'PTC',
    tag: 'AR Design and Development',
    description: 'We worked with PTC to simplify how industrial IoT and digital transformation products are communicated — turning complex technical capabilities into clear, human-centered narratives.',
    logo: './src/images/logos/ptc-full.svg',
  },
  schvitzin: {
    name: 'Schvitzin\'',
    tag: 'Brand · Digital',
    description: 'Schvitzin\' is a modern sauna and wellness community built around the ritual of heat therapy. We shaped the brand from the ground up — naming, identity, digital presence — and built a web experience that feels as intentional as the practice itself.',
    logo: './src/images/logos/schvitzin-full.svg',
    sections: [
      {
        heading: 'Scope',
        body: 'Sauna culture is having a moment, but most brands in the space borrow their aesthetic from either Scandinavian minimalism or gym culture — neither of which captures the social, ritualistic nature of what Schvitzin is actually about. We set out to build something warmer and more human: a brand that celebrates sweat, community, and the deliberate act of slowing down.',
      },
      {
        heading: 'Brand Identity',
        body: 'The name — Yiddish for sweating — immediately signals personality. We leaned into that specificity: this isn\'t a wellness brand trying to appeal to everyone. The identity uses a rich, warm palette and expressive typography to communicate heat, humor, and inclusivity. The mark is confident without being precious, and the voice is self-aware without being ironic.',
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
    description: 'Somatic is an upcoming app that focuses on helping athletes train with their body and not against it. By employing local-first AI to analyze movement patterns, Somatic gives users real-time feedback on their form and technique — helping them optimize performance while reducing the risk of injury.',
    logo: '/src/images/logos/somatic-mini.svg',
    sections: [
      {
        heading: 'Design',
        body: 'Somatic is designed exclusively for iOS and build around iOS\`s Liquid Glass design system. We leaned into the platform\'s emphasis on depth, translucency, and motion to create an experience that feels native to the device while still reading as distinctly Somatic. The UI is intentionally minimal — giving the product room to breathe and keeping the focus on the movement feedback itself.',
      },
      {
        heading: 'Privacy',
        body: 'Privacy is at the center of Somatic\'s design philosophy. All movement data is processed locally on the user\'s device — nothing is uploaded to the cloud. We designed the product with that in mind, making it clear to users that their data stays with them and building trust through transparency about how the technology works.',
      },
      {
        heading: 'Development',
        body: 'Using AI-powered development tools, we were able to iterate on the product design rapidly — testing different feedback modalities, refining the UI based on user interactions, and optimizing the experience for real-world use. The result is a product that feels polished and responsive, with a level of nuance that would have been difficult to achieve without AI-assisted development.',
      },
    ],
  },
  sourced: {
    name: 'Sourced Adventures',
    tag: 'Brand Identity, Narrative, Product Design',
    description: 'Sourced Adventures was born from the shuttering of a similar Living Social product. When we first spoke with founder Kyle, his ask was simple: high-energy. His mission was to build an accessible platform for New Yorkers — and since, a much wider market — to get out of the city and find adventure.',
    logo: './src/images/logos/sourced-adventures.svg',
    hero: './src/images/work/sourced-adventures/sa-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: 'Sourced Adventures was born from the shuttering of a similar Living Social product. When we first sat down with founder Kyle, he was clear about what he wanted: high-energy. His mission was to create an accessible platform for New Yorkers — and since, a market far beyond that — to get out of the city and find adventure. Competitors were surprisingly sparse. Many offered day-trips within the city, but few ventured further out. The platform has since expanded to international destinations and private custom trips.',
      },
      {
        heading: 'Branding & Logo',
        body: 'The founder had sketched out an initial logo concept which we transformed into the launch mark. The logo is built to invoke the "get out there" mentality — skiing was central to early Sourced Adventures trips and we wanted to pay homage to those beginnings. We\'ve since collaborated through minor updates and refinements, but the core mark remains very close to what launched.',
        images: [
          { src: './src/images/work/sourced-adventures/sa-logo.jpg', title: 'Sourced Adventures Logo', caption: 'The first iteration of the Sourced Adventures logo.' },
          { src: './src/images/work/sourced-adventures/sa-skiing.jpg', title: 'Homage', caption: 'Skiing has been central to the Sourced Adventures brand since the beginning.' },
        ],
      },
      {
        heading: 'Creating a Lifestyle',
        body: 'When we turned to the website, we carried that same high-energy forward into the browsing experience. High-quality trip photography pairs with modern typography to strike the right balance: raw and adventurous, but with the comfort of knowing there\'s a seasoned guide along for the entire ride. We wanted to convey the rawness that comes with adventuring while blending the reassurance of a well-organized, curated product.',
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
    description: 'Trace is a macOS applications that allows users to overlay designs on top of development work to keep design and development aligned.',
    logo: './src/images/logos/trace-mini.svg',
    link: 'https://damianmakki.github.io/trace/',
    linkText: 'Download',
    logoFilter: 'none',
    sections: [
      {
        heading: 'Design',
        body: 'Designed to blend in perfectly with macOS 26, Trace had to feel like a natural extension of the system rather than a third-party add-on. We leaned into native UI patterns and built custom components that mimicked the look and feel of Apple\'s own design language. The result is an app that feels like it belongs on the platform — intuitive for new users while powerful enough for seasoned designers and developers.',
      },
      {
        heading: 'Development',
        body: 'Leaning into AI-assisted development, Trace was built using macOS-native Swift and Swift UI.',
      },
    ],
  },
  transaccts: {
    name: 'Transaccts',
    tag: 'Web Development, Design System',
    description: 'Transaccts set out to modernize tax and accounting for long-haul truck drivers. As lead designer for the project, the challenge was creating a straightforward UI to help drivers focus on driving — not their taxes. The starting point was a Progressive Web App, giving any user on any device access while keeping a path open to native iOS and Android.',
    logo: './src/images/logos/transaccts.svg',
    hero: './src/images/work/transaccts/transaccts-hero.jpg',
    sections: [
      {
        heading: 'Scope',
        body: 'Transaccts initially wanted to validate their concept with a Progressive Web App — a platform-agnostic starting point that lets any user on any device access the product. We also had to keep in mind that a successful MVP would eventually become native iOS and Android apps, which meant starting with a platform-agnostic UI while keeping native design conventions for both platforms as a guiding constraint throughout.',
      },
      {
        heading: 'Research & Discovery',
        body: 'Initial research uncovered very few direct competitors in the market. We mapped user flows and built personas around the core workflow: photograph a receipt, confirm itemized amounts, wait for approval. Early designs prioritized a clean feed of information and easy-to-parse detail pages — optimized for a non-technical user base spending most of their time behind a wheel.',
        images: [
          { src: './src/images/work/transaccts/transaccts-mobile.jpg', title: 'Mobile Overview', caption: 'An overview of all screens accessible via mobile devices.' },
          { src: './src/images/work/transaccts/transaccts-desktop.jpg', title: 'Desktop Overview', caption: 'Being a PWA, functional parity is kept between desktop and mobile.' },
        ],
      },
      {
        heading: 'Automagic',
        body: 'The decision to automate receipt scanning with OCR was pivotal. Once a photo hit the server, the system extracted products, categories, and prices automatically. For a non-technical audience, we deliberately obfuscated this complexity — creating what users called an "automagic" experience. A persistent Add Receipt button made the most important action available in as few taps as possible, and proved to be the product\'s defining selling point.',
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
    description: 'Very Cool Weekly is a newsletter about cool things. We built the brand and designed the email template — creating a visual identity that stands out in the inbox while letting the content shine.',
    link: 'https://damianmakki.github.io/verycoolweekly/',
    logo: './src/images/logos/very-cool-mini.svg',
    sections: [
      {
        heading: 'Scope',
        body: 'The newsletter market is saturated with generic templates and over-designed brands. Very Cool Weekly needed something that would stand out in the inbox without overshadowing the content itself. We built a brand identity and email template that strikes that balance — bold and distinctive, but designed to let the curated links take center stage.',
      }
    ]
  },
  welcome: {
    name: 'Welcome',
    tag: 'Product Design',
    description: 'We partnered with Welcome to design and build their internal presentation design to be used by the sales teams — creating a flexible template system that lets them quickly build compelling decks without needing a designer for every update.',
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