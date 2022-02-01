import { useStaticQuery, graphql } from "gatsby"

export const useProductsHero2Data = () => {
  const productsHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "products-hero-2" } }) {
        frontmatter {
          heroHeading2
          heroText2
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

  const data = productsHeroData?.markdownRemark?.frontmatter

  return data
}
