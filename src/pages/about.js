import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Icon from "../components/Icon"
import InfoBox from "../components/InfoBox"
import InfoSection from "../components/InfoSection"
import { useAboutHeroData } from "../fetchHooks/useAboutHero"
import { useAboutUsData } from "../fetchHooks/useAboutUsSection"
import { useOurProductsData } from "../fetchHooks/useOurProductsSection"
import { useInfoBoxData } from "../fetchHooks/useInfoBox"
import { useInfoSectionData } from "../fetchHooks/useInfoSection"

export default () => {
  const { heroHeading, heroImg } = useAboutHeroData()

  const {
    aboutUsSectionHeading,
    aboutUsSectionSubhead,
    aboutUsSectionContent,
    contactUsHeading,
    contactInfoList,
  } = useAboutUsData()

  const {
    ourProductsSectionHeading,
    ourProductsSectionSubhead,
    ourProductsSectionContent,
  } = useOurProductsData()

  const { infoBoxList } = useInfoBoxData()

  const {
    infoSectionHeading,
    infoSectionContent,
    infoSectionBtnSecondary,
    infoSectionBtnSecondaryUrl,
  } = useInfoSectionData()

  return (
    <Layout className="landing">
      <section className="hero withOverlay page-top-hero">
        <GatsbyImage
          className="grid-1"
          alt={heroHeading}
          image={getImage(heroImg)}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="text-info-block">
              <h3 className="h3">{aboutUsSectionSubhead}</h3>
              <h2 className="large-title">{aboutUsSectionHeading}</h2>
              <h5 className="h5">{aboutUsSectionContent}</h5>
            </div>
            <div className="contact-info-block">
              <h3 className="h3">{contactUsHeading}</h3>
              <ul className="contact-info">
                {contactInfoList.map(({ icon, link, contactInfoText }, i) => {
                  return (
                    <li key={i}>
                      {link ? (
                        <a href={link} rel="noreferrer">
                          <Icon icon={icon} size={24} /> {contactInfoText}
                        </a>
                      ) : (
                        <>
                          <Icon icon={icon} size={24} /> {contactInfoText}
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-info-block text-left">
            <h3 className="h3">{ourProductsSectionSubhead}</h3>
            <h2 className="large-title">{ourProductsSectionHeading}</h2>
            <h5 className="h5">{ourProductsSectionContent}</h5>
          </div>
        </div>
      </section>
      <section className="section info-box-section">
        <div className="container">
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
      <InfoSection
        title={infoSectionHeading}
        content={infoSectionContent}
        buttonName={infoSectionBtnSecondary}
        buttonUrl={infoSectionBtnSecondaryUrl}
      />
    </Layout>
  )
}
