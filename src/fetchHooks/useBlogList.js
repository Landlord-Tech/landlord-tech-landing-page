import { useStaticQuery, graphql } from "gatsby"

export const useBlogListData = () => {
  const blogListData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "blog-list" } }) {
        frontmatter {
          heroHeading
          heroText
        }
      }
    }
  `)

  const data = blogListData?.markdownRemark?.frontmatter

  return data
}
