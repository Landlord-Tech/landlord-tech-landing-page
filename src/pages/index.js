import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CalculatorSection from "../components/calculator/CalculatorSection"
import Icon from "../components/Icon"
import scrollTo from "gatsby-plugin-smoothscroll"
import Seo from "../components/seo"
import InfoBox from "../components/InfoBox"
import InfoBlocks from "../components/InfoBlocks"
import InfoSection from "../components/InfoSection"

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
      <section className="hero withOverlay">
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
                <h1 className="h1">Mischief Managed</h1>
                <p className="hero-text">
                  Transform the way you manage your pet program in your
                  residential rental portfolio with OurPetPolicy.
                </p>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-lg primary"
                  >
                    Learn more
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-lg secondary"
                  >
                    Get a Demo
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
              {/* <GatsbyImage
                alt={sec1Heading}
                image={getImage(sec1Img)}
                formats={["AUTO", "WEBP", "AVIF"]}
              /> */}
              <StaticImage
                alt="About us"
                src={"../images/imgText.png"}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="text">
              <h3 className="h3">About us</h3>
              <h2 className="large-title">
                Solving Residential Real Estate Problems
              </h2>
              <p>
                Landlord Tech solves some of the messiest problems in the
                residential real estate industry. Our mission is to provide
                digital tools to residential real estate owners and property
                managers that solve some of their most difficult problems.
                Landlord Tech got its start with OurPetPolicy, an industry
                leading pet management platform and ESA verification service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <InfoBlocks
        title="Manage ESA Requests"
        content="Fraudulent ESA letters are a real problem for residential real
        estate. Typically more than 50% of ESA letters are fraudulent.
        With lost pet rent, no pet deposit, increased damage, and
        problems with them not following the pet rules result in real
        losses to property owners and headaches for property managers."
        imageUrl="../images/imgText.png"
        icon="file-settings"
      />
      <InfoBlocks
        title="Manage ESA Requests"
        content="Fraudulent ESA letters are a real problem for residential real
      estate. Typically more than 50% of ESA letters are fraudulent.
      With lost pet rent, no pet deposit, increased damage, and
      problems with them not following the pet rules result in real
      losses to property owners and headaches for property managers."
        imageUrl="../images/imgText.png"
        icon="file-settings"
      />
      <InfoBlocks
        title="Manage ESA Requests"
        content="Fraudulent ESA letters are a real problem for residential real
    estate. Typically more than 50% of ESA letters are fraudulent.
    With lost pet rent, no pet deposit, increased damage, and
    problems with them not following the pet rules result in real
    losses to property owners and headaches for property managers."
        imageUrl="../images/imgText.png"
        icon="file-settings"
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
