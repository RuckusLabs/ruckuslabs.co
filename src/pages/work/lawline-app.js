import * as React from "react"

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BrowseMore from "./browseMore";


import * as workStyles from "./work.module.css";

import ShowcaseGrid from "../../components/showcase-grid/showcase-grid";

import HeroImage from "../../images/frontpage/lawline-app-hero.jpg";

import iOSDevice from "../../images/work/lawline-app/lawline-ios.png";
import androidDevice from "../../images/work/lawline-app/lawline-android.png";
import iOSPlayer from "../../images/work/lawline-app/lawline-ios-player.png";
import iOSSmartNotes from "../../images/work/lawline-app/lawline-ios-smartnotes.png";
import iOSSmartNotesEdit from "../../images/work/lawline-app/lawline-ios-smartnotes-edit.png";


export default function WorkPage() {

  const pageTitle = "Lawline iOS and Android Apps";

  const deviceSlider = [
    {
      "title": "iOS",
      "description": "Lawline on iOS with React Native.",
      "src": `${iOSDevice}`,
    },
    {
      "title": "Android",
      "description": "Lawline on Android with React Native.",
      "src": `${androidDevice}`,
    },
  ]

  const playerSlider = [
    {
      "title": "Lawline's player on iOS",
      "description": "A simple interface to view slides and control playback.",
      "src": `${iOSPlayer}`,
    }
  ]

  const moreScreensSlider = [
    {
      "title": "SmartNotes Interface",
      "description": "Browsing all SmartNotes",
      "src": `${iOSSmartNotes}`,
    },
    {
      "title": "SmartNotes Action Sheet",
      "description": "Leveraging native UI when appropriate.",
      "src": `${iOSSmartNotesEdit}`,
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
          <p>To stay ahead of the industry, Lawline introduced mobile apps for iOS and Android build on React Native.</p>
        </innerWrapper>
      </section>
      <section>
        <h2>Scope</h2>
        <p>Keeping feature parity with Lawline's flagship web application was an important aspect of this project. A proper blend of Lawline's visual language and the iOS and Android mobile visual language was an interesting challenge.</p>
      </section>
      <section>
        <h2>Translating a Visual Language</h2>
        <p>In conjunction with Lawline developers, we were able to translate all of the core features into the mobile applications. In order to co-develop the iOS and Android applications simultaneously we decided to base them on the React Native framework.</p>
        <ShowcaseGrid gallery="devices" items={deviceSlider} />
      </section>
      <section>
        <h2>Learning On-The-Go</h2>
        <p>One of the most essential pieces of the Lawline mobile experience is listening to Courses on-the-go. I wanted to create an enjoyable, flexible, and powerful experience here - where users would be spending most of their time.</p>
        <ShowcaseGrid gallery="player" items={playerSlider} />
      </section>
      <section>
        <h2>Getting Work Done</h2>
        <p>It was an interesting challenge to blend the tried-and-true UX of a podcast-style player with some of Lawline's core products like SmartNotes, Course Materials, and presentation syncing.</p>
        <ShowcaseGrid gallery="more-screens" items={moreScreensSlider} />
      </section>
      <section>
        <BrowseMore />
      </section>
    </Layout>
  )
}