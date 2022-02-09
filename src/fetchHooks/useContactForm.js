import { useStaticQuery, graphql } from "gatsby"

export const useContactFormData = () => {
  const contactFormData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact-form" } }) {
        frontmatter {
          contactFormHeading
          contactFormBtn
          formSuccessMessageHeading
          formSuccessMessageSubhead
        }
      }
    }
  `)

  const data = contactFormData?.markdownRemark?.frontmatter

  return data
}
