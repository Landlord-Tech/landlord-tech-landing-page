import { useStaticQuery, graphql } from "gatsby"

export const usePartnersDetailData = () => {
  const partnersDetailData = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "partners-detail"}}}) {
        edges {
          node {
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
      }
    }
  `)

  // Map through the edges and return the frontmatter of each node
  const data = partnersDetailData?.allMarkdownRemark?.edges.map(edge => edge.node.frontmatter);

  return data;
}
