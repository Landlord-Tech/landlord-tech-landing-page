import { useStaticQuery, graphql } from "gatsby"

export const useOurProductsData = () => {
  const ourProductsData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "our-products-section" } }) {
        frontmatter {
          ourProductsSectionHeading
          ourProductsSectionSubhead
          ourProductsSectionContent
        }
      }
    }
  `)

  const data = ourProductsData?.markdownRemark?.frontmatter

  return data
}
