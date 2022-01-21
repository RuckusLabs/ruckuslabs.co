import React, { useState, useEffect } from 'react';

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BrowseMore from "./browseMore";


import * as workStyles from "./work.module.css";

import WorkCarousel from "../../components/work-carousel/work-carousel";
import ShowcaseGrid from "../../components/showcase-grid/showcase-grid";

import HeroImage from "../../images/work/sourced-adventures/sa-hero.jpg";
import SALogo from "../../images/work/sourced-adventures/sa-logo.jpg";
import skiImage from "../../images/work/sourced-adventures/sa-skiing.jpg";
import screenOne from "../../images/work/sourced-adventures/screen-1.jpg";
import screenTwo from "../../images/work/sourced-adventures/screen-2.jpg";

export default function WorkPage() {

  const pageTitle = "Sourced Adventures";

  const logoSlider = [
    {
      "title": "Sourced Adventures Logo",
      "description": "The first iteration of the Sourced Adventures logo.",
      "src": `${SALogo}`,
    },
    {
      "title": "Homage",
      "description": "Skiing has been central to the Sourced Adventures brand since the beginning.",
      "src": `${skiImage}`,
    }
  ]

  const detailPageSlider = [
    {
      "src": `${screenOne}`,
    },
    {
      "src": `${screenTwo}`,
    },
  ]

  return (
    <Layout location="work/chicory" title={pageTitle}>
      <Seo title={pageTitle} />
      <section
        className={workStyles.heroWrapper}
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <innerWrapper>
          <h1>{pageTitle}</h1>
          <p>Sourced Adventures' mission is to make the outdoors accessible and affordable for everyone. It was my responsibility to create a matching high-energy brand and combine it with a platform to sell trips and adventures.</p>
        </innerWrapper>
      </section>
      <section>
        <h2>Scope</h2>
        <p>Sourced Adventures was born from the shuttering of a similar product sold by Living Social. When I first interviewed the founder, Kyle, about how he wanted to position his brand, he responded with high-energy. His mission was to create an accessible platform for New Yorkers (and since, much beyond that market) to get out of the city and find adventure.</p>
        <p>Competitors were surprisingly sparse. There were many that offered day-trips within the city, but few who ventured further out than that. Since then, Sourced Adventures has come a long way - now offering international destinations and even private trips for those looking for a more tailored experience.</p>
      </section>
      <section>
        <h2>Branding & Logo</h2>
        <p>Branding was an important aspect of the Sourced Adventures product. The founder, himself, sketched out what he had in mind for a logo which I then took and transformed into the current logo. We've since worked together through minor updates and modernizing, but the core logo remains very similar to launch.</p>
        <p>The logo is meant to invoke the "get out there" mentality. Skiing was an important piece of early Sourced Adventure trips and we wanted to pay homage to the beginning.</p>
        <ShowcaseGrid items={logoSlider} />
      </section>
      <section>
        <h2>Creating a Lifestyle</h2>
        <p>Brands like Sourced Adventures are fun because they allow for some pretty outlandish design language. When we turned to the website, we knew we wanted to bring that same high-energy of the trips and logo into the trip-browsing experience.</p>
        <p>High quality trip photos combine with modern typography to invoke a "roughing it" feel. We wanted to convey the rawness that comes with adventuring while blending the comfort of having a seasoned guide by your side the whole time.</p>
        <ShowcaseGrid items={detailPageSlider} />
      </section>
    </Layout>

  )
}