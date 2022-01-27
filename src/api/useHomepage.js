import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useHomepageData = () => {
  const homepageData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-first" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroText
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          heroBtn
          heroBtnUrl
        }
      }
    }
  `)

  const data = homepageData?.markdownRemark?.frontmatter

  return data
}
