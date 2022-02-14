import { useStaticQuery, graphql } from "gatsby"

export const useWithPetCalculatorData = () => {
  const withPetCalculatorData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "with-pet-calculator" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          sec1Heading
          sec1SubHeading1
          sec1Text1
          sec1Desc
          sec2Heading
          sec2SubHeading1
          sec2Text1
          sec2SubHeading2
          sec2Text2
          sec2SubHeading3
          sec2Text3
          sec2Desc
          sec3Heading
          sec3SubHeading1
          sec3Text1
          sec3SubHeading2
          sec3Text2
          sec3Desc
          sec4Heading
          sec4SubHeading1
          sec4Text1
          sec4SubHeading2
          sec4Text2
          sec4SubHeading3
          sec4Text3
          sec4Desc
          sec5Heading
          sec5SubHeading1
          sec5Text1
          sec5SubHeading2
          sec5Text2
          sec5Desc
          sec6Heading
          sec6Desc
        }
      }
    }
  `)

  const data = withPetCalculatorData?.markdownRemark?.frontmatter

  return data
}
