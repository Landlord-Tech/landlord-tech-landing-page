import { useStaticQuery, graphql } from "gatsby"

export const useHomepageAboutData = () => {
  const homepageAboutData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-about-section" } }) {
        frontmatter {
          imageTextTitle
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

  const data = homepageAboutData?.markdownRemark?.frontmatter

  return data
}
