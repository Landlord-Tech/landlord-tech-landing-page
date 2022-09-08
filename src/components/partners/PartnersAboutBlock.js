import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const { partnerName, address, about, buttonName, buttonUrl } = data

  return (
    <div className="partner-about-wrapper">
      <h2 className="h2">{partnerName}</h2>
      <h5 className="h5 address">{address}</h5>
      <p className="h5 about">{about}</p>
      <a href={buttonUrl} rel="noreferrer" className="btn btn-lg primary">
        {buttonName}
      </a>
    </div>
  )
}
