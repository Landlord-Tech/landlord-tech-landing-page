import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useInfoBoxData = () => {
  const infoBoxData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "info-box" } }) {
        frontmatter {
          title
        }
      }
    }
  `)

  const data = infoBoxData?.markdownRemark?.frontmatter

  return data
}
