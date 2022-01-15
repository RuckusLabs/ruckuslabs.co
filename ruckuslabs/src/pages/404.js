import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section>
        <Seo title="404: Not Found" />
        <h1>404</h1>
        <p>The page you're looking for doesn't exist. It may have been moved or deleted. If you think you're seeing this message in error, please message <a className="external" href="mailto:damian@makki.pro">damian@makki.pro</a>.</p>
      </section>
    </Layout>

  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
