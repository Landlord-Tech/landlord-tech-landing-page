import { useStaticQuery, graphql } from "gatsby"

export const usePlatformSectionData = () => {
  const platformSectionData = useStaticQuery(graphql`
    {
      markdownRemark(
        frontmatter: { title: { eq: "multi-tenant-platform-section" } }
      ) {
        html
        frontmatter {
          sectionHeading
          sectionSubhead
          platformImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          platformTitle
          platformContent1
          platformDescList {
            platformDescItem
          }
          platformContent2
        }
      }
    }
  `)

  const data = platformSectionData?.markdownRemark

  return data
}
