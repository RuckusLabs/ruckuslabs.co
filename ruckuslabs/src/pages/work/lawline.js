import * as React from "react"

import Layout from "../../components/layout";
import Seo from "../../components/seo";

import * as workStyles from "./work.module.css";

import WorkCarousel from "../../components/work-carousel/work-carousel";
import ShowcaseGrid from "../../components/showcase-grid/showcase-grid";

import ChicoryImage from "../../images/frontpage/chicory-brand-hero.jpg";

export default function Chicory() {

  const pageTitle = "Lawline";

  const scopeSlider = [
    {
      "title": "Aya Healthcare",
      "description": "The #1 rated travel nursing agency.",
      "src": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Aya Healthcare",
      "description": "The #1 rated travel nursing agency.",
      "src": `https://via.placeholder.com/200x200`,
    },
    {
      "title": "Aya Healthcare",
      "description": "The #1 rated travel nursing agency.",
      "src": `https://via.placeholder.com/200x200`,
    },
  ]

  return (
    <Layout location="work/chicory" title={pageTitle}>
      <section
        className={workStyles.heroWrapper}
        style={{ backgroundImage: `url(${ChicoryImage})` }}
      >
        <innerWrapper>
          <h1>{pageTitle}</h1>
          <p>The Lawline service is used by well over 100,000 lawyers who pay a monthly subscription fee to access content and complete courses.</p>
          <p>As the Lead designer at Lawline, I was responsible for everything from business card designs to user research and UI development.</p>
        </innerWrapper>
      </section>
      <section>
        <h2>Scope</h2>
        <p>When I first joined the Lawline team, I stepped into a brand new role as a full-time designer. I jumped in right away tackling redesigns of two core products: the course details and bundles pages. These pieces were an evolution of existing content, a collection of best practices from the industry, and a visual overlay to tie it in with Lawline’s visual language.</p>
        <ShowcaseGrid items={scopeSlider} />
      </section>
      <section>
        <h2>Scope</h2>
      </section>
    </Layout>

  )
}