import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ClientGrid from "../components/client-grid/client-grid";
import ClientTestimonials from "../components/client-testimonials/client-testimonials";
import WorkCarousel from "../components/work-carousel/work-carousel";
import Services from "../components/services/services";

import * as indexStyles from './index.module.css';

import LawlineImg from "../images/frontpage/lawline-web-hero.jpg";
import ChicoryImg from "../images/frontpage/chicory-brand-hero.jpg";
import LawlineAppImg from "../images/frontpage/lawline-app-hero.jpg";


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const workItems = [
    {
      "title": "Lawline Web Interface",
      "description": "Building the #1 CLE platform used by thousands of attorneys throughout the United States.",
      "tags": ["UI Design", "Design Systems", "Development"],
      "hero": `${LawlineImg}`,
      "link": "/work/lawline",
    },
    {
      "title": "Chicory Brand Development",
      "description": "Developing a cohesive brand and design strategy for a startup disrupting the online shopping space.",
      "tags": ["Logo Design", "Branding Design", "Design Systems", "Print Design"],
      "hero": `${ChicoryImg}`,
      "link": "/work/chicory",
    },
    {
      "title": "Lawline iOS and Android Apps",
      "description": "Translating the Lawline experience to native mobile applications.",
      "tags": ["UI Design", "Design System", "Development"],
      "hero": `${LawlineAppImg}`,
      "link": "/work/lawline-app",
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Ruckus Labs | Dedicated to the pursuit of empathetic design."></Seo>
      <section>
        <h1 className={indexStyles.heading}>Dedicated to the pursuit of empathetic design.</h1>
        <p>The synthesis of aesthetics, business goals, and a deep understanding of user behavior into cohesive, focused digital products.</p>
      </section>

      <section>
        <h2>Design & Development Services</h2>
        <Services />
      </section>

      <section className="bleed">
        <nav className={indexStyles.sectionHeader}>
          <h2>Featured Work</h2>
        </nav>
        <WorkCarousel items={workItems} />
      </section>

      <section>
        <h2>Featured Clients</h2>
        <ClientGrid />
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
