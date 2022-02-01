import { useStaticQuery, graphql } from "gatsby"

export const useProductsHero3Data = () => {
  const productsHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "products-hero-3" } }) {
        frontmatter {
          heroHeading3
          heroText3
          heroImg3 {
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
