import { useStaticQuery, graphql } from "gatsby"

export const useTermsData = () => {
  const termsData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "terms-and-conditions" } }) {
        html
        frontmatter {
          heroHeading
        }
      }
    }
  `)

  const data = termsData?.markdownRemark

  return data
}
