import { useStaticQuery, graphql } from "gatsby"

export const useInfoBoxData = () => {
  const infoBoxData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "info-box" } }) {
        frontmatter {
          title
          infoBoxList {
            icon
            infoBoxButton
            infoBoxButtonURL
            infoBoxContent
            infoBoxHeading
          }
        }
      }
    }
  `)

  const data = infoBoxData?.markdownRemark?.frontmatter

  return data
}
