import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Faq from "../components/faq"
import Seo from "../components/seo"
import { useFAQHeroData } from "../fetchHooks/useFAQHero"
import { useFAQListData } from "../fetchHooks/useFaqList"

const FAQ = () => {
  const {
    metaTitle,
    metaDescription,
    heroHeading,
    heroSubhead,
    heroBtnSecondary,
    heroBtnSecondaryUrl,
    heroImg,
  } = useFAQHeroData()

  const { faqHeading, faqList } = useFAQListData()

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero withOverlay page-top-hero">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-centered">
                <h1 className="h1">{heroHeading}</h1>
                <p className="pre-text">{heroSubhead}</p>
                <div className="btn-group">
                  <a
                    href={heroBtnSecondaryUrl}
                    rel="noreferrer"
                    className="btn btn-lg secondary"
                  >
                    {heroBtnSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
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

export default FAQ
