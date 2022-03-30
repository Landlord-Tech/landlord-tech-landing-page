import { useStaticQuery, graphql } from "gatsby"

export const useHomepageVideoSectionData = () => {
  const homepageVideoSectionData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "homepage-video-section" } }) {
        frontmatter {
          imageTextHeading
          imageTextContent
          videoSrcURL
        }
      }
    }
  `)

  const data = homepageVideoSectionData?.markdownRemark?.frontmatter

  return data
}
