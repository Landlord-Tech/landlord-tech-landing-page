import { useStaticQuery, graphql } from "gatsby"

export const useAboutHeroData = () => {
  const aboutHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "about-hero" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const data = aboutHeroData?.markdownRemark?.frontmatter

  return data
}
