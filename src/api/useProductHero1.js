import { useStaticQuery, graphql } from "gatsby"

export const useProductsHero1Data = () => {
  const productsHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "products-hero-1" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading1
          heroText1
          heroBtnSecondary1
          heroBtnSecondaryUrl1
          heroImg1 {
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
