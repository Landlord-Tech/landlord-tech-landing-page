import React from "react"
import Layout from "../components/layout"
import HTMLContent from "../components/HTMLContent"
import { useTermsData } from "../fetchHooks/useTermsAndConditions"

const Terms = () => {
  const { frontmatter, html } = useTermsData()
  const { heroHeading } = frontmatter
  return (
    <Layout>
      <section className="small-hero xs">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <HTMLContent content={html} className="dynamic-content" />
        </div>
      </section>
    </Layout>
  )
}

export default Terms
