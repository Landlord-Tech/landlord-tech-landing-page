import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Icon from "../components/Icon"
import { graphql, useStaticQuery } from "gatsby"

const ContactUs = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       markdownRemark(frontmatter: { title: { eq: "contact" } }) {
  //         frontmatter {
  //           heroHeading
  //           heroText
  //           sec1Heading
  //           contactList {
  //             ContactItem
  //             icon
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   const { markdownRemark } = data
  //   const { frontmatter } = markdownRemark
  //   const { heroHeading, heroText, sec1Heading, contactList } = frontmatter

  const contactList = [
    {
      ContactItem: "950 W Bannock Street, #860 Boise, ID 83702",
      icon: "phone",
    },
    {
      ContactItem: "950 W Bannock Street, #860 Boise, ID 83702",
      icon: "phone",
    },
    {
      ContactItem: "950 W Bannock Street, #860 Boise, ID 83702",
      icon: "phone",
    },
  ]

  return (
    <Layout>
      <section className="small-hero">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">Get in touch!</h1>
              <p>
                We’d love to hear from you! Please contact us with questions,
                suggestions and feedback!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-list-wrapper">
              <h2 className="h2">Contact Information</h2>
              <ul className="contact-list">
                {contactList.map(({ ContactItem, icon }, index) => {
                  return (
                    <li key={index}>
                      <Icon icon={icon} size={24} color="#FCC425" />
                      {ContactItem}
                      {/* {icon === "email" ? (
                        <a href={`mailto: ${ContactItem.join(" ")}`}>
                          {ContactItem.join(" ")}
                        </a>
                      ) : (
                        ContactItem.join(" ")
                      )} */}
                    </li>
                  )
                })}
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
