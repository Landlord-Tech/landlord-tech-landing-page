import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import { useNotFoundData } from "../fetchHooks/useNotFound"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const { heroHeading, heroText, heroImg, primaryBtn, secondaryBtn } =
    useNotFoundData()

  return (
    <Layout className="landing">
      <Seo title="404: Not found" />
      <section className="hero error-page withOverlay">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <div className="button-group">
                  <Link to="/" className="btn btn-lg primary">
                    {primaryBtn}
                  </Link>
                  <Link to="/contact-us" className="btn btn-lg secondary">
                    {secondaryBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
