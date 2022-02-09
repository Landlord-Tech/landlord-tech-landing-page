import React from "react"
import Layout from "../components/layout"
import Faq from "../components/faq"
import Seo from "../components/seo"
import { usePricingHeroData } from "../fetchHooks/usePricingHero"
import { usePricingListData } from "../fetchHooks/usePricingList"
import { useFAQListData } from "../fetchHooks/useFaqList"

const Pricing = () => {
  const { metaTitle, metaDescription, heroHeading, heroSubhead } =
    usePricingHeroData()

  const { pricingList } = usePricingListData()
  const { faqHeading, faqList } = useFAQListData()

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="small-hero md">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
              <p className="pre-text">{heroSubhead}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-list-section">
        <div className="container">
          <ul className="pricing-list-content">
            {pricingList.map(
              (
                {
                  pricingPlan,
                  contractNumber,
                  planPrice,
                  pricingBtn,
                  pricingBtnUrl,
                },
                index
              ) => {
                return (
                  <li key={index}>
                    <div>
                      <h3 className="h3 primary title bold">{pricingPlan}</h3>
                      <h4 className="h4 sub-title secondary fw-medium">
                        {contractNumber} residents
                      </h4>
                      {planPrice && (
                        <>
                          <h4 className="h4 fw-medium">
                            <strong className="h2 primary bold color-primary">
                              ${planPrice}/
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
          <h2 className="h2 text-center">{faqHeading}</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default Pricing
