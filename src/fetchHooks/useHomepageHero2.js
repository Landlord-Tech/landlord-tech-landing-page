import { useStaticQuery, graphql } from "gatsby"

export const useHomepageHero2 = () => {
  const homepageHero2Data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-hero-2" } }) {
        frontmatter {
          heroHeading2
          heroText2
          heroSecondaryHeading2
          heroSecondaryText2
          heroSecondaryTextUrl2
          heroBtnPrimary2
          heroBtnPrimaryUrl2
          heroImg2 {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const data = homepageHero2Data?.markdownRemark?.frontmatter

  return data
}
