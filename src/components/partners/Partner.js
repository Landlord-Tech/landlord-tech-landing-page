import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const { logo, name, address, description, buttonUrl, buttonName } = data
  return (
    <div className="partner-wrapper">
      <div className="container">
        <div className="partner-content">
          <div className="partner-img-wrapper">
            <GatsbyImage alt="partner-logo" image={getImage(logo)} />
          </div>
          <div className="partner-list-content">
            <h2 className="h2">{name}</h2>
            <h6 className="h5 address">{address}</h6>
            <h5 className="h5 description">{description}</h5>
            <a href={buttonUrl} rel="noreferrer" className="btn btn-lg primary">
              {buttonName}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
