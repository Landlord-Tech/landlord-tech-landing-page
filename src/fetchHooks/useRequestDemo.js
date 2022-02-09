import { useStaticQuery, graphql } from "gatsby"

export const useRequestDemoData = () => {
  const requestDemoData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "request-demo" } }) {
        frontmatter {
          metaTitle
          metaDescription
          calendarEventLink
          demoDuration
          requestDemoHeading
          requestDemoInfoList {
            requestDemoInfoText
          }
        }
      }
    }
  `)

  const data = requestDemoData?.markdownRemark?.frontmatter

  return data
}
