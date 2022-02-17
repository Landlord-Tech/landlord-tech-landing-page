import { useStaticQuery, graphql } from "gatsby"

export const useContactUsData = () => {
  const contactUsData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact-us" } }) {
        frontmatter {
          aboutUsHeading
          aboutUsSubhead
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
