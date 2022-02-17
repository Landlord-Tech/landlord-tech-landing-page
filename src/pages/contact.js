import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"
import { useContactUsData } from "../fetchHooks/useContactUs"

const ContactUs = () => {
  const { aboutUsHeading, aboutUsSubhead, contactUsHeading, contactInfoList } =
    useContactUsData()

  return (
    <Layout>
      <section className="small-hero">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{aboutUsHeading}</h1>
              <p>{aboutUsSubhead}</p>
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
                            <Icon icon={icon} size={24} color="#FCC425" />
                            {contactInfoText}
                          </a>
                        ) : (
                          <>
                            <Icon icon={icon} size={24} color="#FCC425" />
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
