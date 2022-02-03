import { useStaticQuery, graphql } from "gatsby"

export const useSingleBlogData = () => {
  const singleBlogData = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/resources/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              path
              date(formatString: "MMMM DD, YYYY")
              heroHeading
              heroImg {
                childImageSharp {
                  gatsbyImageData(width: 480, height: 270)
                }
              }
              category
              excerpt
            }
          }
        }
      }
    }
  `)

  const data = singleBlogData?.allMarkdownRemark?.edges

  return data
}
