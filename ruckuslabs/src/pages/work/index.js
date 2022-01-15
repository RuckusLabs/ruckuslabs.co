import * as React from "react"
import Layout from "../../components/layout";

import WorkCarousel from "../../components/work-carousel/work-carousel";

import nesoLogo from "../../images/logos/neso-hero.jpg";
import chicoryLogo from "../../images/logos/chicory-logo-hero.jpg";
import oldLandingLogo from "../../images/logos/old-landing-hero.jpg";
import azOutsideLogo from "../../images/logos/az-outside-hero.jpg";
import theBreakLogo from "../../images/logos/the-break-hero.jpg";
import tpvLogo from "../../images/logos/three-piece-vegan-hero.jpg";
import gflLogo from "../../images/logos/gfl-foods-hero.jpg";
import climateLogo from "../../images/logos/climate-hero.jpg";
import lizzenLogo from "../../images/logos/lizzen-hero.jpg";
import veryCoolLogo from "../../images/logos/very-cool-hero.jpg";

export default function Work() {

  const userInterfaceItems = [
    {
      "title": "Aya Healthcare",
      "description": "The #1 rated travel nursing agency.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Lawline Web Interface",
      "link": "/work/lawline",
      "description": "Building the #1 CLE platform used by thousands of attorneys throughout the United States.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Lawline iOS and Android Apps",
      "description": "Translating the Lawline experience to native mobile applications.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Sourced Adventures",
      "description": "Escape the city.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Transaccts iOS and Android Apps",
      "description": "Translating the Lawline experience to native mobile applications.",
      "hero": `https://via.placeholder.com/200x200`,
    },
  ]

  const brandingItems = [
    {
      "title": "neso ↗",
      "link": "https://neso.com",
      "description": "Outdoor gear born in Encinitas, California.",
      "hero": `${nesoLogo}`,
    },
    {
      "title": "Chicory",
      "link": "/work/chicory",
      "description": "Building a brand to power the disruption of online shopping.",
      "hero": `${chicoryLogo}`,
    },
    {
      "title": "Old Landing",
      "description": "Lifestyle goods for the modern outdoorsman.",
      "hero": `${oldLandingLogo}`,
    },
    {
      "title": "AZ Outside ↗",
      "link": "https://www.instagram.com/azoutside/",
      "description": "Showcasing the best of Arizona on Instagram.",
      "hero": `${azOutsideLogo}`,
    },
    {
      "title": "The Break",
      "link": "https://www.thebreakk.com/",
      "description": "A 3-day creative retreat that brings female television writers together with top entertainment execs and working industry professionals.",
      "hero": `${theBreakLogo}`,
    },
    {
      "title": "Very Cool ↗",
      "link": "https://damianmakki.github.io/verycoolweekly/",
      "description": "A weekly newsletter for designers and developers.",
      "hero": `${veryCoolLogo}`,
    },
    {
      "title": "Lizzen",
      "description": "Share your Spotify songs with Apple Music users. And vice versa.",
      "hero": `${lizzenLogo}`,
    },
    {
      "title": "Three Piece Vegan",
      "description": "Quick, simple recipes for the modern vegan.",
      "hero": `${tpvLogo}`,
    },
    {
      "title": "GFL Foods ↗",
      "link": "https://glutenfreepitas.com/",
      "description": "Helping individuals live a gluten-free lifestyle.",
      "hero": `${gflLogo}`,
    },
    {
      "title": "CLImate ↗",
      "link": "https://github.com/thephpleague/climate",
      "description": "PHP's best friend for the terminal.",
      "hero": `${climateLogo}`,
    },
  ]

  const printItems = [
    {
      "title": "Lawline Web Interface",
      "description": "Building the #1 CLE platform used by thousands of attorneys throughout the United States.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Chicory Brand Development",
      "description": "Developing a cohesive brand and design strategy for a startup disrupting the online shopping space.",
      "hero": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Lawline iOS and Android Apps",
      "description": "Translating the Lawline experience to native mobile applications.",
      "hero": `https://via.placeholder.com/200x200`,
    },
  ]

  const pageTitle = "Work";

  return (
    <Layout location="work" title={pageTitle}>
      <section>
        <h1>{pageTitle}</h1>
        <p>From startups to industry leaders, Ruckus Labs partners with clients of all types to build ideas, products, and always put users first.</p>
      </section>
      <section className="bleed">
        <nav>
          <h2>User Interfaces</h2>
        </nav>
        <WorkCarousel items={userInterfaceItems} />
      </section>
      <section className="bleed">
        <nav>
          <h2>Branding & Logos</h2>
        </nav>
        <WorkCarousel items={brandingItems} />
      </section>
      <section>
        <p>Interested to see how Ruckus Labs can help you achieve your business goals and build first-class digital products? <a href="#">Let's chat</a>.</p>
      </section>
      {/* <section className="bleed">
        <nav>
          <h2>Print</h2>
        </nav>
        <WorkCarousel items={printItems} />
      </section> */}
    </Layout>

  )
}