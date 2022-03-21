import { useStaticQuery, graphql } from "gatsby"

export const useHomepageVideoSectionData = () => {
  const homepageVideoSectionData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-video-section" } }) {
        frontmatter {
          imageTextHeading
          imageTextContent
          imageTextImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const data = homepageVideoSectionData?.markdownRemark?.frontmatter

  return data
}
