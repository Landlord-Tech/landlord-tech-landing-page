import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const { logo, partnerName, address, about } = data
  return (
    <div className="partner-wrapper">
      <div className="container">
        <div className="partner-content">
          <div className="partner-img-wrapper">
            <GatsbyImage alt="partner-logo" image={getImage(logo)} />
          </div>
          <div className="partner-list-content">
            <h2 className="h2">{partnerName}</h2>
            <h6 className="h5 address">{address}</h6>
            <h5 className="h5 description">{about}</h5>
            <a
              href={`/partners/${partnerName}`}
              rel="noreferrer"
              className="btn btn-lg primary"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
