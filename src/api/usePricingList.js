import { useStaticQuery, graphql } from "gatsby"

export const usePricingListData = () => {
  const pricingListData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "pricing-list" } }) {
        frontmatter {
          pricingList {
            pricingPlan
            contractNumber
            planPrice
            pricingBtn
            pricingBtnUrl
          }
        }
      }
    }
  `)

  const data = pricingListData?.markdownRemark?.frontmatter

  return data
}
