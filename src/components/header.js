import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "./Icon"
import useLockedBody from "../hooks/useLockedBody"
import { useHeaderData } from "../fetchHooks/useHeader"
import { Helmet } from "react-helmet"


<Helmet>
       <meta name="trustpilot-one-time-domain-verification-id" content="b8bc146e-8e9b-4c23-b6c3-14020d16a77e"/> 
</Helmet>

const Header = ({ sticky, prodHeader }) => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [openedDropdown, setOpenedDropdown] = useState(false)
  const [locked, setLocked] = useLockedBody()

  function handleMenuToggle() {
    setOpenedMenu(!openedMenu)
    setLocked(!locked)
  }

  function handleDropdownToggle() {
    setOpenedDropdown(!openedDropdown)
  }

  const {
    linkedLoginText,
    linkedLoginTextUrl,
    primaryBtn,
    primaryBtnUrl,
    secondaryBtn,
    secondaryBtnUrl,
  } = useHeaderData()

  return (
    <header
      className={`header ${openedMenu ? "opened" : ""} ${
        sticky ? "sticky" : ""
      }`}
    >    
      <div className="container fluid">
        <div className="header-content">
          <Link
            to={`${prodHeader ? "https://landlordtech.com/" : "/"}`}
            className="logo"
          >
            <StaticImage
              src="../images/logo-blue.svg"
              alt="LandlordTech"
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="transparent"
            />
          </Link>

          {!prodHeader && (
            <>
              <button
                className="no-style burger-menu"
                onClick={handleMenuToggle}
              >
                <Icon
                  color="#007fff"
                  size={24}
                  icon={`${openedMenu ? "close" : "burger"}`}
                />
              </button>
              <nav className="header-nav">
                <ul className="header-nav-list">
                  <li className="with-dropdown">
                    Products
                    <ul
                      className={`dropdown-content ${
                        openedDropdown ? "opened" : "desktop"
                      }`}
                    >
                      <li>
                        <Link to="/products" target="_blank">
                          OurPetPolicy
                        </Link>
                      </li>
                    </ul>
                    <button
                      className="no-style dropdown-btn"
                      onClick={handleDropdownToggle}
                    >
                      <Icon
                        icon={`${
                          openedDropdown ? "arrow-top" : "arrow-bottom"
                        }`}
                        size={24}
                        color="#007fff"
                      />
                    </button>
                  </li>
                  <li>
                    <Link
                      activeClassName={"active-link"}
                      to="/calculator-no-pets-allowed/"
                    >
                      ROI calculator
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/pricing/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/contact/">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/resources/">
                      Resources
                    </Link>
                  </li>
                  <li className="login-link">
                    <a
                      href={linkedLoginTextUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {linkedLoginText}
                    </a>
                  </li>
                  <li className="nav-button-group">
                    <a
                      href={primaryBtnUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-md signup-btn ghost"
                    >
                      {primaryBtn}
                    </a>
                    <a
                      href={secondaryBtnUrl}
                      rel="noreferrer"
                      className="btn btn-md primary request-demo-btn"
                    >
                      {secondaryBtn}
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
