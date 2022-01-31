import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CalculatorSection from "../components/calculator/CalculatorSection"
import Icon from "../components/Icon"
import scrollTo from "gatsby-plugin-smoothscroll"
import Seo from "../components/seo"
import InfoBox from "../components/InfoBox"
import InfoBlocks from "../components/InfoBlocks"
import InfoSection from "../components/InfoSection"
import { useHomepageData } from "../api/useHomepage"

const Landlords = () => {
  const {
    metaTitle,
    metaDescription,
    heroHeading,
    heroText,
    heroImg,
    heroBtnPrimary,
    heroBtnPrimaryUrl,
    heroBtnSecondary,
    heroBtnSecondaryUrl,
    imageTextContent,
    imageTextHeading,
    imageTextTitle,
    imageTextImg,
    infoBlockHeading1,
    infoBlockContent1,
    infoBlockImg1,
    infoBlockIcon1,
    infoBlockHeading2,
    infoBlockContent2,
    infoBlockImg2,
    infoBlockIcon2,
    infoBlockHeading3,
    infoBlockContent3,
    infoBlockImg3,
    infoBlockIcon3,
  } = useHomepageData()

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero withOverlay">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <div>
                  <a
                    href={heroBtnPrimaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-lg primary"
                  >
                    {heroBtnPrimary}
                  </a>
                  <a
                    href={heroBtnSecondaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-lg secondary"
                  >
                    {heroBtnSecondary}
                  </a>
                </div>
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
          <div className="img-text-content">
            <div className="img">
              <GatsbyImage
                alt={imageTextHeading}
                image={getImage(imageTextImg)}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="text">
              <h3 className="h3">{imageTextTitle}</h3>
              <h2 className="large-title">{imageTextHeading}</h2>
              <p>{imageTextContent}</p>
            </div>
          </div>
        </div>
      </section>
      <InfoBlocks
        heading={infoBlockHeading1}
        content={infoBlockContent1}
        imageUrl={infoBlockImg1}
        icon={infoBlockIcon1}
      />
      <InfoBlocks
        heading={infoBlockHeading2}
        content={infoBlockContent2}
        imageUrl={infoBlockImg2}
        icon={infoBlockIcon2}
      />
      <InfoBlocks
        heading={infoBlockHeading3}
        content={infoBlockContent3}
        imageUrl={infoBlockImg3}
        icon={infoBlockIcon3}
      />
      <section className="no-more-section section">
        <div className="container">
          <div className="no-more-content">
            <InfoBox
              title="Pet Management Training"
              content="We offer initial training for all property managers and give
                them resources to make sure they know exactly what is legal to
                expect in accommodations for ESA's and Service Animals."
              buttonName="Learn more"
              buttonUrl="#"
              icon="hand"
            />
            <InfoBox
              title="Pet Management Training"
              content="We offer initial training for all property managers and give
              them resources to make sure they know exactly what is legal to
              expect in accommodations for ESA's and Service Animals."
              buttonName="Learn more"
              buttonUrl="#"
              icon="hand"
            />
            <InfoBox
              title="Pet Management Training"
              content="We offer initial training for all property managers and give
            them resources to make sure they know exactly what is legal to
            expect in accommodations for ESA's and Service Animals."
              buttonName="Learn more"
              buttonUrl="#"
              icon="hand"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="title text-center">
            <h2 className="h2">Calculate the Savings</h2>
          </div>
          <CalculatorSection />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="title">
            <h2 className="h2">Our Customers Love Landlord Tech</h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-item box-wrapper">
              <Icon icon="quote-icon" size={64} className="quote-icon" />
              <h5 className="h5">
                I use Landlord Tech for all of my properties. It has taken a
                huge management hassle out of pet management, and has saved me
                time, money and peace of mind.
              </h5>
              <div className="testimonial-info">
                <StaticImage
                  src={"../images/banner.png"}
                  alt="rotate"
                  placeholder="transparent"
                />
                <div>
                  <p className="reviewer-name">Cody Miller</p>
                  <p className="reviewer-title">Real Estate Owner</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item box-wrapper">
              <Icon icon="quote-icon" size={64} className="quote-icon" />
              <h5 className="h5">
                I use Landlord Tech for all of my properties. It has taken a
                huge management hassle out of pet management, and has saved me
                time, money and peace of mind.
              </h5>
              <div className="testimonial-info">
                <StaticImage
                  src={"../images/banner.png"}
                  alt="rotate"
                  placeholder="transparent"
                />
                <div>
                  <p className="reviewer-name">Cody Miller</p>
                  <p className="reviewer-title">Real Estate Owner</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item box-wrapper">
              <Icon icon="quote-icon" size={64} className="quote-icon" />
              <h5 className="h5">
                I use Landlord Tech for all of my properties. It has taken a
                huge management hassle out of pet management, and has saved me
                time, money and peace of mind.
              </h5>
              <div className="testimonial-info">
                <StaticImage
                  src={"../images/banner.png"}
                  alt="rotate"
                  placeholder="transparent"
                />
                <div>
                  <p className="reviewer-name">Cody Miller</p>
                  <p className="reviewer-title">Real Estate Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="half-image-banner">
        <StaticImage
          src={"../images/banner.png"}
          alt="rotate"
          placeholder="transparent"
        />
        <div className="banner-info">
          <h2 className="h2">What Property Managers Want</h2>
          <h5 className="h5">
            Find out what Property Managers want in ESA Letter management, and
            how to stay in compliance.
          </h5>
          <h4 className="h4">What Landlords Need To Know About ESAs In 2021</h4>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg primary"
          >
            Learn more
          </a>
          <p>
            <Link to="/privacy-policy" className="underline link-to">
              Link to the blog post for this ebook
            </Link>
          </p>
        </div>
      </section>
      <InfoSection
        title="We're Here to Help"
        content="Our Team of Residential Property Experts are just a click away. We'd love to discuss how Landlord Tech
can take the pain out of residential pet management."
        buttonName="Let’s talk"
        buttonUrl="#"
      />
    </Layout>
  )
}

export default Landlords
