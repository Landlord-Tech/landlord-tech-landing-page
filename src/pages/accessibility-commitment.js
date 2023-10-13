import React from "react"
import Layout from "../components/layout"
import HTMLContent from "../components/HTMLContent"
import { useAccessibilityCommitment } from "../fetchHooks/useAccessibilityCommitment"
import Seo from "../components/seo"


const AccessibilityCommitment = () => {
  const { frontmatter, html } = useAccessibilityCommitment()
  const { heroHeading } = frontmatter
  return (
    <Layout>
      <Seo title="ADA Statement | Protect your Properties with Landlord Tech" description="Ensure protection of your rental properties with the best pet management platform from Landlord Tech." />
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
          <HTMLContent content={html} className="dynamic-content content-md" />
        </div>
      </section>
    </Layout>
  )
}

export default AccessibilityCommitment
