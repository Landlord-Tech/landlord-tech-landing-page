import React from "react"
import Layout from "../components/layout"
import HTMLContent from "../components/HTMLContent"
import { useTermsData } from "../fetchHooks/useTermsAndConditions"
import Seo from "../components/seo"


const Terms = () => {
  const { frontmatter, html } = useTermsData()
  const { heroHeading } = frontmatter
  return (
    <Layout>
      <Seo title="Pet Management for Properties | Landlord Tech’s Terms" description="Learn more about the policies, terms and conditions for the purchase and use of the best pet management platform for residential real estate owners." />
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

export default Terms
