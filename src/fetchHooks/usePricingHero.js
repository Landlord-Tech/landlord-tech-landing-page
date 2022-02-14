import { useStaticQuery, graphql } from "gatsby"

export const usePricingHeroData = () => {
  const pricingHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "pricing-hero" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroSubhead
        }
      }
    }
  `)

  const data = pricingHeroData?.markdownRemark?.frontmatter

  return data
}
