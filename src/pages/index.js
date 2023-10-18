import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import Layout from "../components/layout"
import CalculatorSection from "../components/calculator/CalculatorSection"
import Icon from "../components/Icon"
import scrollTo from "gatsby-plugin-smoothscroll"
import Seo from "../components/seo"
import InfoBox from "../components/InfoBox"
import InfoBlocks from "../components/InfoBlocks"
import InfoSection from "../components/InfoSection"
import Testimonial from "../components/Testimonial"
import { useHomepageHero1Data } from "../fetchHooks/useHomepageHero1Data"
import { useInfoBoxData } from "../fetchHooks/useInfoBox"
import { useInfoBlockData } from "../fetchHooks/useInfoBlock"
import { useHomepageVideoSectionData } from "../fetchHooks/useHomepageVideoSection"
import { useTestimonialData } from "../fetchHooks/useTestimonials"
import { useHomepageHero2 } from "../fetchHooks/useHomepageHero2"
import { useInfoSectionData } from "../fetchHooks/useInfoSection"
import Badges from "../components/Badges"

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
    calculatorTitle,
  } = useHomepageHero1Data()

  const {
    infoSectionHeading,
    infoSectionContent,
    infoSectionBtnSecondary,
    infoSectionBtnSecondaryUrl,
  } = useInfoSectionData()

  const {
    heroHeading2,
    heroText2,
    heroImg2,
    heroBtnPrimary2,
    heroBtnPrimaryUrl2,
    heroSecondaryHeading2,
  } = useHomepageHero2()

  const { imageTextContent, imageTextHeading, videoSrcURL } =
    useHomepageVideoSectionData()

  const { infoBoxList, infoBoxTitle } = useInfoBoxData()
  const { infoBlockList } = useInfoBlockData()
  const { testimonialList, testimonialTitle } = useTestimonialData()

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero withOverlay sm">
        <GatsbyImage
          className="grid-1 banner-img"
          alt={heroHeading}
          image={getImage(heroImg)}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="video-text-content">
              <div className="content-wrapper">
                <h1 className="h1">{imageTextHeading}</h1>
                <p>{imageTextContent}</p>
                <div className="btn-group">
                  <a
                    href={heroBtnSecondaryUrl}
                    rel="noreferrer"
                    className="btn btn-lg secondary"
                  >
                    {heroBtnSecondary}
                  </a>
                  <a
                    href={heroBtnPrimaryUrl}
                    rel="noreferrer"
                    className="btn btn-lg primary"
                  >
                    {heroBtnPrimary}
                  </a>
                </div>
              </div>
              <div className="video-container">
              <iframe
                  src={videoSrcURL}
                  title="OurPetPolicy: The Pet Management Software for Rental Property Owners & Managers" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
              />
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={() => scrollTo("#scroll-here")}
          className="animated-mouse"
        >
          <Icon color="#fff" size={60} icon="scroll" />
          <p id="scroll-here">Scroll</p>
        </button> */}
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h2">{infoBoxTitle}</h2>
          <div className="info-box-wrapper">
            {infoBoxList.map((item, i) => {
              return (
                <InfoBox
                  title={item.infoBoxHeading}
                  content={item.infoBoxContent}
                  buttonName={item.infoBoxButton}
                  buttonUrl={item.infoBoxButtonURL}
                  icon={item.icon}
                  key={i}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container">
          <div className="title">
            <h2 className="h2">{testimonialTitle}</h2>
          </div>
          <div className="testimonial-container">
            {testimonialList.map((item, i) => {
              return (
                <Testimonial
                  key={i}
                  reviewerPhoto={item.reviewerImg}
                  reviewerTitle={item.reviewerTitle}
                  reviewer={item.reviewerName}
                  review={item.review}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="title text-center">
            <h2 className="h2">{calculatorTitle}</h2>
          </div>
          <CalculatorSection />
        </div>
      </section>
      <section>
        <div className="info-blocks-wrapper">
          {infoBlockList.map((item, i) => {
            return (
              <InfoBlocks
                key={i}
                heading={item.infoBlockHeading}
                content={item.infoBlockContent}
                imageUrl={item.infoBlockImg}
                icon={item.icon}
              />
            )
          })}
        </div>
      </section>
      {/* EBOOK SECTION */}
      {/* <section className="half-image-banner">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading2}
          image={getImage(heroImg2)}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-info">
          <h2 className="h2">{heroHeading2}</h2>
          <h5 className="h5">{heroText2}</h5>
          <h4 className="h4">{heroSecondaryHeading2}</h4>
          <a
            href={heroBtnPrimaryUrl2}
            rel="noreferrer"
            className="btn btn-lg secondary"
          >
            {heroBtnPrimary2}
          </a>
        </div>
      </section> */}
      <Badges />
      <InfoSection
        title={infoSectionHeading}
        content={infoSectionContent}
        buttonName={infoSectionBtnSecondary}
        buttonUrl={infoSectionBtnSecondaryUrl}
      />
    </Layout>
  )
}

export default Landlords
