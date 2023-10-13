import { useStaticQuery, graphql } from "gatsby"

export const useAccessibilityCommitment = () => {
  const accessibilityCommitmentData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "accessibility-commitment" } }) {
        html
        frontmatter {
          heroHeading
        }
      }
    }
  `)

  const data = accessibilityCommitmentData?.markdownRemark

  return data
}
