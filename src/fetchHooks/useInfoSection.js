import { useStaticQuery, graphql } from "gatsby"

export const useInfoSectionData = () => {
  const infoSectionData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "info-section" } }) {
        frontmatter {
          infoSectionHeading
          infoSectionContent
          infoSectionBtnSecondary
          infoSectionBtnSecondaryUrl
        }
      }
    }
  `)

  const data = infoSectionData?.markdownRemark?.frontmatter

  return data
}
