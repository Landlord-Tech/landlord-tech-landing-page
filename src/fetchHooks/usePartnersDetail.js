import { useStaticQuery, graphql } from "gatsby"

export const usePartnersDetailData = () => {
  const partnersDetailData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "partners-detail" } }) {
        frontmatter {
          metaTitle
          metaDescription
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          path
          partnerName
          address
          about
          buttonName
          buttonUrl
          partnerDetailsList {
            label
            content
          }
          faqList {
            faqQuestion
            faqAnswer
          }
        }
      }
    }
  `)

  
  const data = partnersDetailData?.markdownRemark?.frontmatter

  return data
}
