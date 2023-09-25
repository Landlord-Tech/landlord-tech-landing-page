import React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Icon from "../components/Icon"
import { navigate } from "gatsby"

const Template = ({ data, location }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    metaTitle,
    metaDescription,
    title,
    date,
    path,
    category,
    heroImg,
    heroAltImg,
    heroHeading,
    social,
    promoSection,
  } = frontmatter
  const baseURL = "https://landlordtech.com"
  const fbShare =
    "https://www.facebook.com/sharer/sharer.php?u=" + baseURL + path
  const twitterShare =
    "https://twitter.com/share?url=" +
    baseURL +
    path +
    "&text=" +
    title +
    "&via" +
    "twitterHandle"
  const inShare = "https://linkedin.com/shareArticle?url=" + baseURL + path

  useEffect(() => {
    document.querySelectorAll('iframe').forEach(iframe => {
      if (!iframe.getAttribute('title')) {
        iframe.setAttribute('title', 'Video Content'); // Or any appropriate title
      }
    });
  }, []);

  console.log(data);

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero blog-page withOverlay">
        <GatsbyImage
          className="grid-1"
          alt={getImage(heroAltImg)}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectFit="cover"
        />
        <div className="banner-grid">
          <div className="container">
            <div className="hero-content">
              <button
                onClick={() =>
                  navigate(location.state?.prev ? -1 : "/resources/")
                }
                className="go-back"
              >
                <Icon icon="arrow-left" size={24} color="#fff" />
                Return to the resources homepage
              </button>
              <div className="hero-left">
                <h1 className="heading">{heroHeading}</h1>
                <p className="hero-text">
                  Posted on {date} | In {category}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-post-container">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {social && (
        <div className="blog-social">
          <div className="container">
            <h2 className="h4 secondary fw-medium">Spread the word</h2>
            <div className="blog-social-group">
              <a
                href={inShare}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-in"
              >
                <Icon icon="linkedin-in" size={20} color="#fff" />
                <span className="social-text">Linkedin</span>
              </a>
              <a
                href={fbShare}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-fb"
              >
                <Icon icon="facebook-f" size={20} color="#fff" />
                <span className="social-text">Facebook</span>
              </a>
              <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-twitter"
              >
                <Icon icon="twitter" size={20} color="#fff" />
                <span className="social-text">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {promoSection?.promo && (
        <section className="blog-promo">
          <div className="container">
            <h2 className="h2 color-primary">{promoSection?.promoTitle}</h2>
            <p>{promoSection?.promoText}</p>
            <a
              href={promoSection?.promoBtnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg primary"
            >
              {promoSection?.promoBtn}
            </a>
          </div>
        </section>
      )}
    </Layout>
  )
}



export default Template


export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        category
        heroImg {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        heroHeading
        metaTitle
        metaDescription
        heroAltImg 
        social
        promoSection {
          promo
          promoTitle
          promoText
          promoBtn
          promoBtnUrl
        }
      }
    }
  }
`


