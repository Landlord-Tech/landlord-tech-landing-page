import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Icon from "../components/Icon"
import InfoBox from "../components/infoBox/InfoBox"
import InfoSection from "../components/infoSection/InfoSection"

export default () => {
  return (
    <Layout className="landing">
      <section className="hero withOverlay">
        <StaticImage
          className="grid-1"
          objectPosition={"70%"}
          objectFit="cover"
          src={"../images/banner.png"}
          alt="Our Story"
          formats={["AUTO", "WEBP", "AVIF"]}
          placeholder="transparent"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content centered">
              <div className="hero-left">
                <h1 className="h1">Our Story</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="text-info-block">
              <h3 className="h3">About us</h3>
              <h2 className="large-title">
                Built by Property Owners for Property Owners
              </h2>
              <h5 className="h5">
                Landlord Tech solves some of the messiest problems in the
                residential real estate industry. Our mission is to provide
                digital tools to residential real estate owners and property
                managers that solve some of their most difficult problems.
                Landlord Tech got its start with OurPetPolicy, an industry
                leading pet management platform and ESA verification service.
              </h5>
            </div>
            <div className="contact-info-block">
              <h3 className="h3">Contact info</h3>
              <ul className="contact-info">
                <li>
                  <Icon icon="phone" size={24} /> (208) 906 - 8886
                </li>
                <li>
                  <Icon icon="phone" size={24} /> (208) 906 - 8886
                </li>
                <li>
                  <Icon icon="phone" size={24} /> 950 W. Bannock, #860 Boise,
                  Idaho 83702
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-info-block text-left">
            <h3 className="h3">Our Products</h3>
            <h2 className="large-title">
              Revamping Your Residential Rental Porfolio
            </h2>
            <h5 className="h5">
              Landlord Tech solves some of the messiest problems in the
              residential real estate industry. Our mission is to provide
              digital tools to residential real estate owners and property
              managers that solve some of their most difficult problems.
              Landlord Tech got its start with OurPetPolicy, an industry leading
              pet management platform and ESA verification service.
            </h5>
          </div>
        </div>
      </section>
      <section className="section info-box-section">
        <div className="container">
          <div className="info-box-wrapper">
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
