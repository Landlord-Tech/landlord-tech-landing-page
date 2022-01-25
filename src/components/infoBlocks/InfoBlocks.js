import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Icon from "../Icon"

export default ({ title, content, imageUrl, icon }) => {
  return (
    <section className="img-text-section section">
      <div className="container">
        <div className="img-text-content">
          <div className="img">
            {/* <GatsbyImage
            alt={title}
            image={getImage(imageUrl)}
            formats={["AUTO", "WEBP", "AVIF"]}
          /> */}
            <StaticImage
              alt="About us"
              src="../../images/imgText.png"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>
          <div className="text">
            <div className="img-text-title-wrapper">
              <Icon icon={icon} size={80} />
              <h3 className="h3">{title}</h3>
            </div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
