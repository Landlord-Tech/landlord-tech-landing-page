import { useStaticQuery, graphql } from "gatsby"

export const useInfoBlockData = () => {
  const infoBlockData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "info-block" } }) {
        frontmatter {
          title
          infoBlockList {
            infoBlockImg {
              childImageSharp {
                gatsbyImageData
              }
            }
            infoBlockHeading
            infoBlockContent
            icon
          }
        }
      }
    }
  `)

  const data = infoBlockData?.markdownRemark?.frontmatter

  return data
}
