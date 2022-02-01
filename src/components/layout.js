/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import scrollTo from "gatsby-plugin-smoothscroll"
import Icon from "./Icon"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles/main.scss"
import "../assets/styles/_fonts.scss"

const Layout = ({ children, className, prodHeader }) => {
  const { pathname } = useLocation()
  const [sticky, setSticky] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSticky(window.pageYOffset > 200)
        setScrollTop(window.pageYOffset > 600)
      })
    }
  }, [])

  return (
    <>
      <Header pathname={pathname} sticky={sticky} prodHeader={prodHeader} />
      <main className={className} id="top">
        {children}
      </main>
      {!pathname.includes("/calculator") && <Footer />}

      <button
        onClick={() => scrollTo("#top")}
        className={`go-top-btn ${scrollTop ? "fade-in" : ""}`}
      >
        <Icon color="#0D0D0D" size={36} icon="arrow-top" />
      </button>
    </>
  )
}

export default Layout
