import { useStaticQuery, graphql } from "gatsby"

export const useLandlordTechProgramSectionData = () => {
  const landlordTechProgramSectionData = useStaticQuery(graphql`
    {
      markdownRemark(
        frontmatter: { title: { eq: "landlord-tech-program-section" } }
      ) {
        frontmatter {
          landlordTechProgramImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          landlordTechProgramTitle
          landlordTechProgramContent
          landlordTechProgramList {
            landlordTechProgramItem
          }
        }
      }
    }
  `)

  const data = landlordTechProgramSectionData?.markdownRemark?.frontmatter

  return data
}
