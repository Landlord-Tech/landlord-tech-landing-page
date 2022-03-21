import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"
import { useContactUsData } from "../fetchHooks/useContactUs"

const ContactUs = () => {
  const {
    metaTitle,
    metaDescription,
    contactUsBannerHeading,
    contactUsBannerSubhead,
    heroImg,
    contactUsHeading,
    contactInfoList,
  } = useContactUsData()

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero withOverlay page-top-hero sm">
        <GatsbyImage
          className="grid-1"
          alt={contactUsBannerHeading}
          image={getImage(heroImg)}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-centered">
                <h1 className="h1">{contactUsBannerHeading}</h1>
                <p>{contactUsBannerSubhead}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-list-wrapper">
              <h2 className="h2">{contactUsHeading}</h2>
              <ul className="contact-list">
                {contactInfoList.map(
                  ({ contactInfoText, icon, link }, index) => {
                    return (
                      <li key={index}>
                        {link ? (
                          <a href={link} rel="noreferrer">
                            <Icon icon={icon} size={24} color="#007FFF" />
                            {contactInfoText}
                          </a>
                        ) : (
                          <>
                            <Icon icon={icon} size={24} color="#007FFF" />
                            {contactInfoText}
                          </>
                        )}
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactUs
