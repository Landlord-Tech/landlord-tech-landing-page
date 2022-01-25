import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "./Icon"
import useLockedBody from "../hooks/useLockedBody"

const Header = ({ pathname, sticky, prodHeader }) => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [openedDropdown, setOpenedDropdown] = useState(false)
  const [locked, setLocked] = useLockedBody()

  // const dark = pathname === "/" || pathname.includes("/landlords") || pathname.includes("/tenants/")
  // const landlords = pathname.includes("/landlords/")
  // const tenants = pathname.includes("/tenants/")

  function handleMenuToggle() {
    setOpenedMenu(!openedMenu)
    setLocked(!locked)
  }

  function handleDropdownToggle() {
    setOpenedDropdown(!openedDropdown)
  }

  // const data = useStaticQuery(graphql`
  //   {
  //     markdownRemark(frontmatter: { title: { eq: "header" } }) {
  //       frontmatter {
  //         primaryBtn
  //         primaryBtnUrl
  //         secondaryBtn
  //         secondaryBtnUrl
  //       }
  //     }
  //   }
  // `)

  // const { markdownRemark } = data
  // const { frontmatter } = markdownRemark
  // const {
  //   primaryBtn,
  //   primaryBtnUrl,
  //   secondaryBtn,
  //   secondaryBtnUrl,
  // } = frontmatter

  return (
    <header
      className={`header dark-header ${openedMenu ? "opened" : ""} ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className="container fluid">
        <div className="header-content">
          {/*<a href={'https://www.ourpetpolicy.com/'} className='logo'>
          <img src={Logo} alt="OurPetPolicy" />
        </a>*/}

          {/*for later use*/}
          <Link
            to={`${prodHeader ? "https://www.ourpetpolicy.com/" : "/"}`}
            className="logo"
          >
            <StaticImage
              src="../images/logo-white.svg"
              alt="OurPetPolicy"
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
                          to="/calculator-no-pets-allowed/"
                        >
                          ROI calculator
                        </Link>
                      </li>
                      <li>
                        <Link activeClassName={"active-link"} to="/pricing/">
                          Pricing
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
                      />
                    </button>
                  </li>
                  <li>
                    <Link activeClassName={"active-link"} to="/tenants/">
                      For Landlords
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
                  <li className="nav-button-group">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-md primary get-started-btn"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-md  login-btn secondary"
                    >
                      Login
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
