import { useStaticQuery, graphql } from "gatsby"

export const useAboutUsData = () => {
  const aboutUsData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "about-us-section" } }) {
        frontmatter {
          aboutUsSectionHeading
          aboutUsSectionSubhead
          aboutUsSectionContent
          contactUsHeading
          contactInfoList {
            icon
            contactInfoText
          }
        }
      }
    }
  `)

  const data = aboutUsData?.markdownRemark?.frontmatter

  return data
}
