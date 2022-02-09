import { useStaticQuery, graphql } from "gatsby"

export const usePrivacyPolicyData = () => {
  const privacyPolicyData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "privacy-policy" } }) {
        html
        frontmatter {
          heroHeading
        }
      }
    }
  `)

  const data = privacyPolicyData?.markdownRemark

  return data
}
