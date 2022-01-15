import * as React from "react"

import Layout from "../../components/layout";
import Seo from "../../components/seo";

import * as workStyles from "./work.module.css";

import ChicoryImage from "../../images/frontpage/chicory-brand-hero.jpg";

export default function Chicory() {

  const pageTitle = "Chicory";

  return (
    <Layout location="work/chicory" title={pageTitle}>
      <section className={workStyles.heroWrapper}>
        <img className={workStyles.heroImage} src={ChicoryImage} alt="Chicory hero image." />
        <innerWrapper>
          <h1>{pageTitle}</h1>
          <p>This is some chicory shit.</p>
        </innerWrapper>
      </section>
    </Layout>

  )
}