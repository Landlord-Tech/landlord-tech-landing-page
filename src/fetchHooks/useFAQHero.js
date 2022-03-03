import { useStaticQuery, graphql } from "gatsby"

export const useFAQHeroData = () => {
  const FAQHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "faq-hero" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroSubhead
          heroBtnSecondary
          heroBtnSecondaryUrl
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const data = FAQHeroData?.markdownRemark?.frontmatter

  return data
}
