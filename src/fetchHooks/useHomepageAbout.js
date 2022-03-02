import { useStaticQuery, graphql } from "gatsby"

export const useHomepageAboutData = () => {
  const homepageAboutData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-about-section" } }) {
        frontmatter {
          imageTextTitle
          imageTextHeading
          imageTextContent
          videoSrcURL
        }
      }
    }
  `)

  const data = homepageAboutData?.markdownRemark?.frontmatter

  return data
}
