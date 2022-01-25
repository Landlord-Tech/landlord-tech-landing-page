import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import CalculatorSection from "../components/calculator/CalculatorSection"
import Icon from "../components/Icon"
import scrollTo from "gatsby-plugin-smoothscroll"
import Seo from "../components/seo"

const Landlords = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       markdownRemark(frontmatter: { title: { eq: "landlords" } }) {
  //         frontmatter {
  //           metaTitle
  //           metaDescription
  //           heroHeading
  //           heroText
  //           heroImg {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //           heroBtn
  //           heroBtnUrl
  //           calculatorText
  //           calculatorHeading
  //           sec1Heading
  //           sec1Text
  //           sec1Img {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //           sec2Card1Heading
  //           sec2Card1Text
  //           sec2Card2Heading
  //           sec2Card2Text
  //           sec2Card3Heading
  //           sec2Card3Text
  //           sec2Heading
  //           sec3Button
  //           sec3ButtonUrl
  //           sec4Heading
  //           sec3Text
  //           sec4Img {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //           sec4Text
  //           sec5List {
  //             item
  //           }
  //           sec5Btn
  //           sec5BtnUrl
  //           sec5Heading
  //         }
  //       }
  //     }
  //   `)
  //   const { markdownRemark } = data
  //   const { frontmatter } = markdownRemark

  //   const {
  //     metaTitle,
  //     metaDescription,
  //     heroHeading,
  //     heroText,
  //     heroImg,
  //     heroBtn,
  //     heroBtnUrl,
  //     calculatorText,
  //     calculatorHeading,
  //     sec1Heading,
  //     sec1Text,
  //     sec1Img,
  //     sec2Heading,
  //     sec2Card1Heading,
  //     sec2Card1Text,
  //     sec2Card2Heading,
  //     sec2Card2Text,
  //     sec2Card3Heading,
  //     sec2Card3Text,
  //     sec3Text,
  //     sec3Button,
  //     sec3ButtonUrl,
  //     sec4Heading,
  //     sec4Img,
  //     sec4Text,
  //     sec5List,
  //     sec5Btn,
  //     sec5BtnUrl,
  //     sec5Heading,
  //   } = frontmatter

  return (
    <Layout className="landing">
      <section className="hero">
        {/* <GatsbyImage
          className="grid-1"
          alt="Pet Command Center"
          image={getImage("images/banner.png")}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
          objectFit="cover"
        /> */}
        <StaticImage
          className="grid-1"
          objectPosition={"70%"}
          objectFit="cover"
          src={"../images/banner.png"}
          alt="Pet Command Center"
          formats={["AUTO", "WEBP", "AVIF"]}
          placeholder="transparent"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">Pet Command Center</h1>
                <p className="hero-text">
                  Manage Your Pet Program From One Platform
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg secondary"
                >
                  Get started
                </a>
              </div>
              <button
                onClick={() => scrollTo("#scroll-here")}
                className="animated-mouse"
              >
                <Icon color="#fff" size={60} icon="scroll" />
                <p id="scroll-here">Scroll</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="img-text-section section">
        <div className="container">
          <div className="img-text-header">
            <h2 className="h2">Get Your Pet Program Out of the Dog House</h2>
            <h5 className="h5">
              The Complete Multi-Tenant Platform for Pet Management
            </h5>
          </div>
          <div className="img-text-content">
            <div className="text">
              <h3 className="h3">Happy Tenants, Happy Property Management</h3>
              <p>
                Landlord Tech specializes in providing digital tools to help
                property owners and managers successfully manage pets in their
                properties.
              </p>
              <ul>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Easy Pet Management platform for landlords and tenants
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Easy Pet Management platform for landlords and tenants
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Easy Pet Management platform for landlords and tenants
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Easy Pet Management platform for landlords and tenants
                </li>
              </ul>
              <p>
                The OPP Platform is easy to implement, with easy to use
                on-boarding tools and platform management tools.
              </p>
              <p>
                <Link to="/privacy-policy">Contact us </Link>to learn more.
              </p>
            </div>
            <div className="img">
              {/* <GatsbyImage
                alt={sec1Heading}
                image={getImage(sec1Img)}
                formats={["AUTO", "WEBP", "AVIF"]}
              /> */}
              <StaticImage
                alt="Happy Tenants, Happy Property Management"
                src={"../images/imgText.png"}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero withOverlay">
        <StaticImage
          className="grid-1"
          objectPosition={"70%"}
          objectFit="cover"
          src={"../images/banner.png"}
          alt="Pet Command Center"
          formats={["AUTO", "WEBP", "AVIF"]}
          placeholder="transparent"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h2 className="h2">
                  Animal Mapper: Track Pets Across Your Properties
                </h2>
                <h5 className="h5">
                  Track pets and animals across your properties with OPP Animal
                  Mapper. Easily know when pets and animals are in violation
                  across your properties, and enable their owners to make the
                  corrective action fast.
                </h5>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg primary"
                >
                  Get a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="img-text-section section">
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              {/* <GatsbyImage
                alt={sec1Heading}
                image={getImage(sec1Img)}
                formats={["AUTO", "WEBP", "AVIF"]}
              /> */}
              <StaticImage
                alt="Take the Hassle out of ESA Letter Verification"
                src={"../images/imgText.png"}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="text">
              <h2 className="h2">
                Take the Hassle out of ESA Letter Verification
              </h2>
              <p>
                Landlord Tech provides an industry leading ESA verification
                program that is able to recognize fraudlent ESA letters in
                compliance with state and federal law.
              </p>
              <ul>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
                <li>
                  <Icon color="#FCC425" size={24} icon="check" />
                  Identify Fraudulent ESAs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        {/* <GatsbyImage
          className="grid-1"
          alt="Pet Command Center"
          image={getImage("images/banner.png")}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
          objectFit="cover"
        /> */}
        <StaticImage
          className="grid-1"
          objectPosition={"70%"}
          objectFit="cover"
          src={"../images/banner.png"}
          alt="Pet Command Center"
          formats={["AUTO", "WEBP", "AVIF"]}
          placeholder="transparent"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-right">
                <h2 className="h2">
                  Take ESA Masterclass for Residential Real Estate
                </h2>
                <p className="hero-text">
                  OPP offers training for all property managers and gives them
                  resources to stay compliant in accommodations for ESA's and
                  Service Animals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Landlords
