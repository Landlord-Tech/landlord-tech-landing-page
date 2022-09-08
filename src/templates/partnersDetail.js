import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Faq from "../components/faq"
import Seo from "../components/seo"
import PartnersDetail from "../components/partners/PartnersDetail"

const PartnerDetail = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { metaTitle, metaDescription, faqList } = frontmatter

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section>
        <PartnersDetail frontmatter={frontmatter} />
      </section>
      <section className="section faq-section" id="faq">
        <div className="container">
          <h2 className="h2 text-center">Frequently Asked Questions</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default PartnerDetail

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        metaTitle
        metaDescription
        path
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
        partnerName
        address
        about
        buttonName
        buttonUrl
        partnerDetailsList {
          label
          content
        }
        faqList {
          faqQuestion
          faqAnswer
        }
      }
    }
  }
`
