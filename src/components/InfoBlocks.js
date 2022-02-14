import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icon from "./Icon"

export default ({ heading, content, imageUrl, icon }) => {
  return (
    <section className="img-text-section">
      <div className="container">
        <div className="img-text-content">
          <div className="img">
            <GatsbyImage alt={heading} image={getImage(imageUrl)} />
          </div>
          <div className="text">
            <div className="img-text-title-wrapper">
              {Icon && <Icon icon={icon} size={80} />}
              <h3 className="h3">{heading}</h3>
            </div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
