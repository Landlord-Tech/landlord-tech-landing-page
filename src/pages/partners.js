import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Partner from "../components/partners/Partner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { usePartnersListData } from "../fetchHooks/usePartnersList"

const Partners = () => {
  const {
    metaTitle,
    metaDescription,
    heroImg,
    heroHeading,
    heroSubhead,
    partnersList,
  } = usePartnersListData()

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero withOverlay page-top-hero sm">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
                <p className="p">{heroSubhead}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        {partnersList.map((item, i) => (
          <Partner key={i} data={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Partners
