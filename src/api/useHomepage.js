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
          heroBtnPrimary
          heroBtnPrimaryUrl
          heroBtnSecondary
          heroBtnSecondaryUrl
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          imageTextTitle
          imageTextHeading
          imageTextContent
          imageTextImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          infoBlockHeading1
          infoBlockContent1
          infoBlockImg1 {
            childImageSharp {
              gatsbyImageData
            }
          }
          infoBlockIcon1
          infoBlockHeading2
          infoBlockContent2
          infoBlockImg2 {
            childImageSharp {
              gatsbyImageData
            }
          }
          infoBlockIcon2
          infoBlockHeading3
          infoBlockContent3
          infoBlockImg3 {
            childImageSharp {
              gatsbyImageData
            }
          }
          infoBlockIcon3
        }
      }
    }
  `)

  const data = homepageData?.markdownRemark?.frontmatter

  return data
}
