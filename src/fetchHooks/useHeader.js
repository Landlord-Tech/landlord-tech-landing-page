import { useStaticQuery, graphql } from "gatsby"

export const useHeaderData = () => {
  const headerData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "header" } }) {
        frontmatter {
          linkedLoginText
          linkedLoginTextUrl
          primaryBtn
          primaryBtnUrl
          secondaryBtn
          secondaryBtnUrl
        }
      }
    }
  `)

  const data = headerData?.markdownRemark?.frontmatter

  return data
}
