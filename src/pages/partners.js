import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Partner from "../components/partners/Partner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Partners = () => {
  const partners = {
    metaTitle: "Partners metaTitle",
    metaDescription: "Partners metaDescription",
    heroImg:
      "https://myresman.com/wp-content/uploads/2019/11/Resman_Color_RGB_ForWeb-01.png",
    heroHeading: "Meet Our Partners",
    partnersList: [
      {
        logo: "https://myresman.com/wp-content/uploads/2019/11/Resman_Color_RGB_ForWeb-01.png",
        description:
          "ResMan® property management software supports your business growth and community engagement through a platform that better connects the Multifamily landscape.",
        buttonName: "Learn more",
        buttonUrl: "#",
      },
      {
        logo: "https://myresman.com/wp-content/uploads/2019/11/Resman_Color_RGB_ForWeb-01.png",
        description:
          "ResMan® property management software supports your business growth and community engagement through a platform that better connects the Multifamily landscape.",
        buttonName: "Learn more",
        buttonUrl: "#",
      },
      {
        logo: "https://myresman.com/wp-content/uploads/2019/11/Resman_Color_RGB_ForWeb-01.png",
        description:
          "ResMan® property management software supports your business growth and community engagement through a platform that better connects the Multifamily landscape.",
        buttonName: "Learn more",
        buttonUrl: "#",
      },
    ],
  }

  return (
    <Layout>
      <Seo title={partners.metaTitle} description={partners.metaDescription} />
      <section className="hero withOverlay page-top-hero sm">
        <GatsbyImage
          className="grid-1"
          alt={partners.heroHeading}
          image={getImage(partners.heroImg)}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-left">
                <h1 className="h1">{partners.heroHeading}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        {partners.partnersList.map((item, i) => (
          <Partner key={i} data={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Partners
