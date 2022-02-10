import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Icon from "../components/Icon"
import Seo from "../components/seo"
import { useProductsHero1Data } from "../fetchHooks/useProductHero1"
import { useProductsHero2Data } from "../fetchHooks/useProductHero2"
import { usePlatformSectionData } from "../fetchHooks/usePlatformSection"
import { useLandlordTechProgramSectionData } from "../fetchHooks/useLandlordTechProgram"
import { useProductsHero3Data } from "../fetchHooks/useProductHero3"

const Landlords = () => {
  const {
    metaTitle,
    metaDescription,
    heroHeading1,
    heroText1,
    heroBtnSecondary1,
    heroBtnSecondaryUrl1,
    heroImg1,
  } = useProductsHero1Data()

  const {
    heroHeading2,
    heroText2,
    heroBtnPrimary2,
    heroBtnPrimaryUrl2,
    heroImg2,
  } = useProductsHero2Data()

  const { heroHeading3, heroText3, heroImg3 } = useProductsHero3Data()

  const {
    sectionHeading,
    sectionSubhead,
    platformImage,
    platformTitle,
    platformContent1,
    platformDescList,
    platformContent2,
  } = usePlatformSectionData()

  const {
    landlordTechProgramImage,
    landlordTechProgramTitle,
    landlordTechProgramContent,
    landlordTechProgramList,
  } = useLandlordTechProgramSectionData()

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading1}
          image={getImage(heroImg1)}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heroHeading1}</h1>
                <p className="hero-text">{heroText1}</p>
                <a
                  href={heroBtnSecondaryUrl1}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg secondary"
                >
                  {heroBtnSecondary1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="img-text-header">
            <h2 className="h2">{sectionHeading}</h2>
            <h5 className="h5">{sectionSubhead}</h5>
          </div>
          <div className="img-text-content">
            <div className="text">
              <h3 className="h3">{platformTitle}</h3>
              <p>{platformContent1}</p>
              <ul>
                {platformDescList.map((item, i) => {
                  return (
                    <li key={i}>
                      <Icon color="#FCC425" size={24} icon="check" />
                      {item.platformDescItem}
                    </li>
                  )
                })}
              </ul>
              <p>{platformContent2}</p>
              <p>
                <Link to="/contact/">Contact us </Link>to learn more.
              </p>
            </div>
            <div className="img">
              <GatsbyImage
                alt={platformTitle}
                image={getImage(platformImage)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero withOverlay">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading2}
          image={getImage(heroImg2)}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h2 className="h2">{heroHeading2}</h2>
                <h5 className="h5">{heroText2}</h5>
                <a
                  href={heroBtnPrimaryUrl2}
                  rel="noreferrer"
                  className="btn btn-lg primary"
                >
                  {heroBtnPrimary2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              <GatsbyImage
                alt={landlordTechProgramTitle}
                image={getImage(landlordTechProgramImage)}
              />
            </div>
            <div className="text">
              <h2 className="h2">{landlordTechProgramTitle}</h2>
              <p>{landlordTechProgramContent}</p>
              <ul>
                {landlordTechProgramList.map((item, i) => {
                  return (
                    <li key={i}>
                      <Icon color="#FCC425" size={24} icon="check" />
                      {item.landlordTechProgramItem}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading3}
          image={getImage(heroImg3)}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <div className="hero-right">
                <h2 className="h2">{heroHeading3}</h2>
                <p className="hero-text">{heroText3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Landlords
