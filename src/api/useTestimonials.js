import { useStaticQuery, graphql } from "gatsby"

export const useTestimonialData = () => {
  const testimonialData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "testimonial" } }) {
        frontmatter {
          title
          testimonialTitle
          testimonialList {
            reviewerName
            reviewerTitle
            review
            reviewerImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const data = testimonialData?.markdownRemark?.frontmatter

  return data
}
