import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { useBlogListData } from "../fetchHooks/useBlogList"
import BlogPostList from "../components/blog/BlogPostList"

const BlogList = () => {
  const { metaTitle, metaDescription, heroHeading, heroText } =
    useBlogListData()
  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="small-hero xs">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text resources-header">
              <h1 className="h1">{heroHeading}</h1>
              <p className="hero-text">{heroText}</p>
            </div>
          </div>
        </div>
      </section>
      <BlogPostList />
    </Layout>
  )
}

export default BlogList
