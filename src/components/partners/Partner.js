import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const { logo, description, buttonUrl, buttonName } = data
  return (
    <div className="partner-wrapper">
      <div className="container">
        <GatsbyImage alt="partner-logo" image={getImage(logo)} />
        <h5 className="h5 description">{description}</h5>
        <a href={buttonUrl} rel="noreferrer" className="btn btn-lg primary">
          {buttonName}
        </a>
      </div>
    </div>
  )
}
