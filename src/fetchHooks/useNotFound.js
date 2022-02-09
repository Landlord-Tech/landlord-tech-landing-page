import { useStaticQuery, graphql } from "gatsby"

export const useNotFoundData = () => {
  const notFoundData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "not-found" } }) {
        frontmatter {
          heroHeading
          heroText
          primaryBtn
          secondaryBtn
          heroImg {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const data = notFoundData?.markdownRemark?.frontmatter

  return data
}
