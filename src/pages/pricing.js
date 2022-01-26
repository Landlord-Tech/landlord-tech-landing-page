import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Faq from "../components/faq"
import Seo from "../components/seo"

const Pricing = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       markdownRemark(frontmatter: { title: { eq: "pricing" } }) {
  //         frontmatter {
  //           metaTitle
  //           metaDescription
  //           heroHeading
  //           heroText
  //           pricingList {
  //             plan
  //             contracts
  //             price
  //             pricingBtn
  //             pricingBtnUrl
  //           }
  //           faqHeading
  //           faqList {
  //             question
  //             answer
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   const { markdownRemark } = data
  //   const { frontmatter } = markdownRemark
  //   const {
  //     metaTitle,
  //     metaDescription,
  //     heroHeading,
  //     heroText,
  //     pricingList,
  //     faqHeading,
  //     faqList,
  //   } = frontmatter

  const faqList = [
    { question: "First Question", answer: "First answer" },
    { question: "Second Question", answer: "Second answer" },
  ]

  const pricingList = [
    {
      plan: "Starter",
      contracts: "1-50 residents",
      price: "5",
      pricingBtn: "Get Started",
      pricingBtnUrl: "#",
    },
    {
      plan: "Standard",
      contracts: "51-250 residents",
      price: "4",
      pricingBtn: "Get Started",
      pricingBtnUrl: "#",
    },
    {
      plan: "Business",
      contracts: "251-1000 residents",
      price: "3",
      pricingBtn: "Get Started",
      pricingBtnUrl: "#",
    },
    {
      plan: "Business",
      contracts: ">1000 residents",
      price: "",
      pricingBtn: "Contact us",
      pricingBtnUrl: "#",
    },
  ]

  return (
    <Layout>
      {/* <Seo title={metaTitle} description={metaDescription} /> */}
      <section className="small-hero md">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">
                Professional pet policy residents in minutes
              </h1>
              <p className="pre-text">
                When it comes to pets, let us do the heavy lifting for as little
                as $5/month
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-list-section">
        <div className="container">
          <ul className="pricing-list-content">
            {pricingList.map(
              (
                { plan, contracts, price, pricingBtn, pricingBtnUrl },
                index
              ) => {
                return (
                  <li key={index}>
                    <div>
                      <h3 className="h3 primary title bold">{plan}</h3>
                      <h4 className="h4 sub-title secondary fw-medium">
                        {contracts}
                      </h4>
                      {price && (
                        <>
                          <h4 className="h4 fw-medium">
                            <strong className="h2 primary bold color-primary">
                              ${price}/
                            </strong>
                            contract
                          </h4>
                          <p>per month</p>
                        </>
                      )}
                    </div>
                    <a
                      href={pricingBtnUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        pricingList.length - 1 !== index ? "primary" : "ghost"
                      } btn btn-lg`}
                    >
                      {pricingBtn}
                    </a>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <h2 className="h2 text-center">Frequently Asked Questions</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default Pricing
