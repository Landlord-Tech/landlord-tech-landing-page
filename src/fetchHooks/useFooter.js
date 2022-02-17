import { useStaticQuery, graphql } from "gatsby"

export const useFooterData = () => {
  const footerData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "footer" } }) {
        frontmatter {
          col1Title
          col1List {
            listItem
            listItemUrl
          }
          col2Title
          col2List {
            listItem
            listItemUrl
          }
          col3Title
          col3List {
            listItem
            listItemUrl
          }
          col4Title
          col4List {
            listItem
            link
            icon
          }
          privacyPolicyTitle
          privacyPolicyUrl
          termsAndConditionsTitle
          termsAndConditionsUrl
        }
      }
    }
  `)

  const data = footerData?.markdownRemark?.frontmatter

  return data
}
