import React, { useState, useEffect } from 'react';

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BrowseMore from "./browseMore";


import * as workStyles from "./work.module.css";

import WorkCarousel from "../../components/work-carousel/work-carousel";
import ShowcaseGrid from "../../components/showcase-grid/showcase-grid";

import HeroImage from "../../images/work/transaccts/transaccts-hero.jpg";

import desktop from "../../images/work/transaccts/transaccts-desktop.jpg";
import mobile from "../../images/work/transaccts/transaccts-mobile.jpg";

import step1 from "../../images/work/transaccts/Add Transaction.jpg";
import step2 from "../../images/work/transaccts/Camera.jpg";
import step3 from "../../images/work/transaccts/Per Diem.jpg";

export default function WorkPage() {

  const pageTitle = "Transaccts PWA";

  const overviewSlider = [
    {
      "title": "Mobile Overview",
      "description": "An overview of all the screens accessible via mobile devices.",
      "src": `${mobile}`,
    },
    {
      "title": "Desktop Overview",
      "description": "Being a PWA, functional parity is kept between desktop and mobile.",
      "src": `${desktop}`,
    },
  ]

  const stepsSlider = [
    {
      "title": "Add Transaction",
      "description": "Adding a transaction is as simple as pressing a button.",
      "src": `${step1}`,
    },
    {
      "title": "Upload Image",
      "description": "After an image is uploaded, it's scanned with OCR technology.",
      "src": `${step2}`,
    },
    {
      "title": "Reporting",
      "description": "Viewing transaction details via the calendar.",
      "src": `${step3}`,
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
          <p>Transaccts set out to modernize tax and accounting for long-haul truck drivers. As the lead designer for the project, it was my responsibility to create a straightforward UI to help drivers focus on driving, not their taxes.</p>
        </innerWrapper>
      </section>
      <section>
        <h2>Scope</h2>
        <p>Transaccts initially wanted to test out their idea with a Progressive Web App. This would allow any user on any device to access the product. I also had to keep in mind that if successful, Transaccts would eventually become native iOS and Android apps. Starting off with a platform agnostic UI while keeping in mind best practices for iOS and Android platforms was an important consideration.</p>
      </section>
      <section>
        <h2>Research & Discovery</h2>
        <p>Initial research uncovered very few direct competitors in the market. We drew out user flows and created personas for how a core user might use the product: upload a picture of a receipt, confirm itemized lists and corresponding transaction amounts, then wait for their submission to be approved.</p>
        <p>Early designs focused around presenting a feed of information and easy-to-parse detail pages.</p>
        <ShowcaseGrid gallery="overview" items={overviewSlider} />
      </section>
      <section>
        <h2>Automagic and Usability</h2>
        <p>When the Transaccts team started building the app, we made the conscious decision to automate one of the core features with OCR. Once an image was uploaded to the server, we would use software to parse the image and pull off relevant data - products, product categories, and prices.</p>
        <p>Due to the non-technical nature of the core customer persona, I decided obfuscating this process was the best route to go down - creating an "automagic" experience that ended up delighting users.</p>
        <p>Finally, as a core feature, I decided that creating a persistent "Add Receipt" button would be a boon to users. Being able to quickly open the app and upload a receipt with as few clicks as possible also proved to be a major selling point for the product.</p>
        <ShowcaseGrid gallery="usability" items={stepsSlider} />
      </section>
      <BrowseMore />
    </Layout>

  )
}