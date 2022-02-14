import { useStaticQuery, graphql } from "gatsby"

export const useFAQListData = () => {
  const FAQListData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "faq-list" } }) {
        frontmatter {
          faqHeading
          faqList {
            faqQuestion
            faqAnswer
          }
        }
      }
    }
  `)

  const data = FAQListData?.markdownRemark?.frontmatter

  return data
}
