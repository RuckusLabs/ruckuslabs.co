import * as React from "react"

import Layout from "../../components/layout";
import BrowseMore from "./browseMore";
import Seo from "../../components/seo";

import * as workStyles from "./work.module.css";

import ShowcaseGrid from "../../components/showcase-grid/showcase-grid";
import HeroImage from "../../images/frontpage/chicory-brand-hero.jpg";

import OGLogo from "../../images/work/chicory/chicory-old.jpg";
import NewLogo from "../../images/work/chicory/chicory-new.jpg";
import teamExplorations from "../../images/work/chicory/team-explorations.jpg";
import logoExplorations from "../../images/work/chicory/logo-exploration.jpg";
import iconography from "../../images/work/chicory/chicory-icons.jpg";
import illustration from "../../images/work/chicory/chicory-illustration.jpg";
import deck from "../../images/work/chicory/chicory-deck-mockup.jpg";
import guideColors from "../../images/work/chicory/guide-colors.jpg";
import guideTypography from "../../images/work/chicory/guide-typography.jpg";
import guideOverlay from "../../images/work/chicory/guide-overlay.jpg";
import guideAngle from "../../images/work/chicory/guide-angle.jpg";

export default function WorkPage() {

  const pageTitle = "Chicory";

  const logoSlider = [
    {
      "title": "Original Chicory Logo",
      "description": "While effectively communicating the association with food and cooking, the original Chicory logo was severely outdated.",
      "src": `${OGLogo}`,
    },
    {
      "title": "New Chicory Logo",
      "description": "The new logo embodies the tech-forward nature of Chicory.",
      "src": `${NewLogo}`,
    },
  ]

  const logoProcessSlider = [
    {
      "title": "Moodboard",
      "description": "The executive team was asked to share logos they admired or thought were associated with Chicory's mission.",
      "src": `${teamExplorations}`,
    },
    {
      "title": "Iteration & Refinement",
      "description": "The Chicory logo went through multiple iterations before ultimately reaching the final product.",
      "src": `${logoExplorations}`,
    },
  ]

  const illustrationSlider = [
    {
      "title": "Iconography",
      "description": "A set of icons derived from Chicory's design system.",
      "src": `${iconography}`,
    },
    {
      "title": "Illustration",
      "description": "Based upon Chicory's colors, a number of illustrations were commissioned for the brand.",
      "src": `${illustration}`,
    },
  ]

  const guideSlider = [
    {
      "title": "Colors",
      "description": "A focused guide to color usage",
      "src": `${guideColors}`,
    },
    {
      "title": "Typography",
      "description": "Simpifying the number of fonts to use leads to a cleaner, more focused design.",
      "src": `${guideTypography}`,
    }
  ]

  const guideSlider2 = [
    {
      "title": "Photo Overlay",
      "description": "Color and gradient overlays help tie image families together",
      "src": `${guideOverlay}`,
    },
    {
      "title": "Angle",
      "description": "Based off an angle found in the logo, the angle helps give photos and graphics a distinctive flair unique to Chicory.",
      "src": `${guideAngle}`,
    }
  ]

  const deckSlider = [
    {
      "title": "Pitch Deck",
      "description": "A pitch deck derived from Chicory's design system.",
      "src": `${deck}`,
    },
  ]


  return (
    <Layout location="work/chicory" title={pageTitle}>
      <section
        className={workStyles.heroWrapper}
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <Seo title={pageTitle} />
        <innerWrapper>
          <h1>{pageTitle}</h1>
          <p>When you're revolutionizing an industry, you've gotta put your best foot forward. Working with Chicory, we rebuilt the brand from the ground up and put together design systems to ensure consistency in the future.</p>
        </innerWrapper>
      </section>
      <section>
        <h2>Scope</h2>
        <p>Technologically advanced. Attractive to both users and brands. Modern. Forward. Tech-enabled. Building a brand around ideas takes a village. The input and guidance from both senior and junior team members was vital to build a brand capable of crossing business initiatives.</p>
        <p>Chicory's remarkable new identity is a product of focused research, strategy and execution. It perfectly conveys the foundational brand values of a modern, technologically-focused company adept and capable of tackling the future of grocery</p>
      </section>
      <section>
        <h2>Logo</h2>
        <p>The first thing to tackle was the outdated brand logo. While playful, the original Chicory lacked any sense of refinement or modernism. The chef's hat alluded to the connection with cooking, but didn't convey the technological advancements the team had made behind the scenes.</p>
        <ShowcaseGrid gallery="logos" items={logoSlider} />
        <p>Chicory's new logo visually exhibits the changed brand. Using a bold purple as its base, the lowercase "chicory" wordmark is a more minimal and modern treatment than the previous design. Chicory's new icon plays with the "c" of Chicory, turning it on its side, a playful hearkening to Chicory's mission to challenge the business-as-usual mentality in the grocery industry. The “c” also resembles a digital device's power button, highlighting Chicory's identity as an always on, always working company with tech at its core.</p>
        <ShowcaseGrid gallery="logo-profess" items={logoProcessSlider} />
        <p>The final logo was a product of input and refinement from the team. Taking visual input from the team and running through various iterations ultimately helped produce the perfect final asset.</p>
      </section>
      <section>
        <h2>Design System</h2>
        <p>To ensure the team was equipped to expand and build upon the core design, a styleguide and design system were developed.</p>
        <ShowcaseGrid gallery="styleguide" items={guideSlider} />
        <ShowcaseGrid gallery="styleguide" items={guideSlider2} />
      </section>
      <section>
        <h2>Iconography & Illustration</h2>
        <p>As the brand grew, it found the need to branch out into other areas of design. An iconography system was developed based on the design system and an illustrator was contracted to help build out common scenes for use in marketing. Later, pitch decks were designed using the base design system with additional flourishes.</p>
        <ShowcaseGrid gallery="iconography-illustration" items={illustrationSlider} />
        <ShowcaseGrid gallery="deck" items={deckSlider} />
      </section>
    </Layout>
  )
}