import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section>
        <Seo title="Contact" />
        <h1>Contact</h1>
        <p>Want to chat about your business idea? Need a logo? Looking for an estimate on a project?</p>
        <p>To get started, send an email to <a className="external" href="mailto:hi@ruckuslabs.co">hi@ruckuslabs.co</a>.</p>
      </section>
    </Layout>

  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
