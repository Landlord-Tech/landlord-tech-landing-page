import React from "react"
import Layout from "../components/layout"
import HTMLContent from "../components/HTMLContent"
import { usePrivacyPolicyData } from "../fetchHooks/usePrivacyPolicy"

const PrivacyPolicy = () => {
  const { frontmatter, html } = usePrivacyPolicyData()
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

export default PrivacyPolicy
