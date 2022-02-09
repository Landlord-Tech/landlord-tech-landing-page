import { useStaticQuery, graphql } from "gatsby"

export const useHomepageHero1Data = () => {
  const homepageHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-hero-1" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroText
          heroBtnPrimary
          heroBtnPrimaryUrl
          heroBtnSecondary
          heroBtnSecondaryUrl
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          calculatorTitle
        }
      }
    }
  `)

  const data = homepageHeroData?.markdownRemark?.frontmatter

  return data
}
