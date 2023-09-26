import React from "react"
import Layout from "../components/layout"
import HTMLContent from "../components/HTMLContent"
import { usePrivacyPolicyData } from "../fetchHooks/usePrivacyPolicy"
import Seo from "../components/seo"


const PrivacyPolicy = () => {
  const { frontmatter, html } = usePrivacyPolicyData()
  const { heroHeading } = frontmatter
  return (
    <Layout>
      <Seo title="Privacy Policy | Protect your Properties with Landlord Tech" description="Ensure protection of your rental properties with the best pet management platform from Landlord Tech." />
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

export default PrivacyPolicy
