const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/resources/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  const partnersDetail = path.resolve(`./src/templates/partnersDetail.js`)
  const partnersDetailResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "partners-detail" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              metaTitle
              metaDescription
              logo {
                childImageSharp {
                  gatsbyImageData
                }
              }
              partnerName
              address
              about
              buttonName
              buttonUrl
              partnerDetailsList {
                label
                content
              }
              faqList {
                faqQuestion
                faqAnswer
              }
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (partnersDetailResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  partnersDetailResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.partnerName,
      component: partnersDetail,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
