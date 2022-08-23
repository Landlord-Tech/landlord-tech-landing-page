import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const { logo, partnerDetailsList } = data

  return (
    <div className="partner-block-wrapper">
      <GatsbyImage alt="partner-logo" image={getImage(logo)} />
      {partnerDetailsList.map((item, i) => (
        <div key={i}>
          <h5 className="h5 label">{item.label}</h5>
          <h5 className="h5 content">{item.content}</h5>
        </div>
      ))}
    </div>
  )
}
