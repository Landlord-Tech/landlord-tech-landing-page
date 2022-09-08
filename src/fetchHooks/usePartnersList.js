import { useStaticQuery, graphql } from "gatsby"

export const usePartnersListData = () => {
  const partnersListData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "parters-list" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          heroHeading
          heroSubhead
        }
      }
    }
  `)

  const data = partnersListData?.markdownRemark?.frontmatter

  return data
}
