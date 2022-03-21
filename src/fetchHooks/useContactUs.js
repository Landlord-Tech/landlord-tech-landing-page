import { useStaticQuery, graphql } from "gatsby"

export const useContactUsData = () => {
  const contactUsData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact-us" } }) {
        frontmatter {
          metaTitle
          metaDescription
          contactUsBannerHeading
          contactUsBannerSubhead
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          contactUsHeading
          contactInfoList {
            contactInfoText
            link
            icon
          }
        }
      }
    }
  `)

  const data = contactUsData?.markdownRemark?.frontmatter

  return data
}
