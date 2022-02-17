import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "./Icon"
import useLockedBody from "../hooks/useLockedBody"
import { useHeaderData } from "../fetchHooks/useHeader"

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
      className={`header dark-header ${openedMenu ? "opened" : ""} ${
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
              src="../images/logo-white.svg"
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
                  color="#fff"
                  size={24}
                  icon={`${openedMenu ? "close" : "burger"}`}
                />
              </button>
              <nav className="header-nav">
                <ul className="header-nav-list">
                  <li className="with-dropdown">
                    <Link activeClassName={"active-link"} to="/products">
                      Products
                    </Link>
                    <ul
                      className={`dropdown-content ${
                        openedDropdown ? "opened" : "desktop"
                      }`}
                    >
                      <li>
                        <Link
                          activeClassName={"active-link"}
                          to="https://www.ourpetpolicy.com"
                          target="_blank"
                        >
                          Our Pet Policy
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
                        color="#fcc425"
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
                    <Link className="active-link" to={linkedLoginTextUrl}>
                      {linkedLoginText}
                    </Link>
                  </li>
                  <li className="nav-button-group">
                    <a
                      href={primaryBtnUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-md signup-btn secondary"
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
