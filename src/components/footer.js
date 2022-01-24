import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     markdownRemark(frontmatter: { title: { eq: "contact" } }) {
  //       frontmatter {
  //         title
  //         heroHeading
  //         heroText
  //         sec1Heading
  //         contactList {
  //           ContactItem
  //           icon
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { markdownRemark } = data
  // const { frontmatter } = markdownRemark
  // const { contactList } = frontmatter

  // const location = contactList[0].ContactItem

  return (
    <footer className="footer">
      <div className="container">
        <Link className="logo" to={"/"}>
          <StaticImage
            src="../images/logo-white.svg"
            alt="OurPetPolicy"
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="transparent"
          />
        </Link>
        <ul className="footer-top">
          <li className="footer-top-col">
            <h4 className="h4">New to Landlord Tech</h4>
            <h5 className="h5">
              <Link to={"/landlords/"}>Why Landlord Tech</Link>
            </h5>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">Products</h4>
            <h5 className="h5">
              <Link to={"/landlords/"}>Pet management platform</Link>
            </h5>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">About Landlord tech</h4>
            <h5 className="h5">
              <Link to={"/landlords/"}>Our story</Link>
            </h5>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/contact-us/"}>Contact us</Link>
            </h4>
            <ul className="footer-contact">
              {/* {contactList.slice(1, 3).map(({ ContactItem, icon }, index) => {
                return (
                  <li key={index}>
                    <Icon icon={icon} size={24} />
                    {ContactItem.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </li>
                )
              })} */}
            </ul>
          </li>
          <li className="footer-top-col">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/OurPetPolicy/"
              className="inline-block"
            >
              <Icon color="#fff" size={40} icon="fb" />
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            <Link to="/privacy-policy">Privacy.</Link>
            <Link to="/terms-and-conditions">Terms & Conditions.</Link> ©{" "}
            {new Date().getFullYear()} Landlord Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
