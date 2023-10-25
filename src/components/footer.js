import React from "react"
import Link from "gatsby-link"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"
import { useFooterData } from "../fetchHooks/useFooter"

const Footer = () => {
  const {
    col1Title,
    col1List,
    col2Title,
    col2List,
    col3Title,
    col3List,
    col4Title,
    col4List,
    privacyPolicyTitle,
    privacyPolicyUrl,
    termsAndConditionsTitle,
    termsAndConditionsUrl,
    accessibilityStatementTitle,
    accessibilityStatementUrl,
  } = useFooterData()

  return (
    <footer className="footer">
      <div className="container">
        <Link className="logo" to={"/"}>
          <StaticImage
            src="../images/logo-blue.svg"
            alt="Landlord tech"
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="transparent"
          />
        </Link>
        <ul className="footer-top">
          <li className="footer-top-col">
            <div className="footer-logos">
              <StaticImage
                src="../images/2018-Industry-Partner.png"
                alt="OPP"
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="transparent"
                className="industry-partner"
              />
              <br />
              <Link
                to={
                  "https://landlordtech.com/resources/ourpetpolicy-narpm-affiliate-of-the-year"
                }
              >
                <StaticImage
                  src="../images/OPP-badge.png"
                  alt="OPP"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="transparent"
                  className="opp-badge"
                />
              </Link>
            </div>
          </li>

          <li className="footer-top-col">
            <h4 className="h4">{col1Title}</h4>
            {col1List.map(({ listItem, listItemUrl }, i) => {
              return (
                <h5 className="h5" key={i}>
                  <Link to={listItemUrl}>{listItem}</Link>
                </h5>
              )
            })}
          </li>
          <li className="footer-top-col">
            <h4 className="h4">{col2Title}</h4>
            {col2List.map(({ listItem, listItemUrl }, i) => {
              return (
                <h5 className="h5" key={i}>
                  <Link to={listItemUrl}>{listItem}</Link>
                </h5>
              )
            })}
          </li>
          <li className="footer-top-col">
            <h4 className="h4">{col3Title}</h4>
            {col3List.map(({ listItem, listItemUrl }, i) => {
              return (
                <h5 className="h5" key={i}>
                  <Link to={listItemUrl}>{listItem}</Link>
                </h5>
              )
            })}
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/contact/"}>{col4Title}</Link>
            </h4>
            <ul className="footer-contact">
              {col4List.map(({ listItem, icon, link }, index) => {
                return (
                  <li key={index}>
                    {link ? (
                      <a href={link} rel="noreferrer">
                        <Icon color="#0073E6" icon={icon} size={24} />
                        {listItem}
                      </a>
                    ) : (
                      <>
                        <Icon color="#0073E6" icon={icon} size={24} />
                        {listItem}
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            {/* {new Date().getFullYear()}  */}© Landlord Tech. All Rights
            Reserved. |<a href={privacyPolicyUrl}>{privacyPolicyTitle}</a> |
            <a href={termsAndConditionsUrl}>{termsAndConditionsTitle}</a> |
            <a href="https://landlordtech.com/accessibility-commitment">Website Statement
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
