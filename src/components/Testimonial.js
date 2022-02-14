import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icon from "./Icon"

export default ({ review, reviewer, reviewerTitle, reviewerPhoto }) => {
  return (
    <div className="testimonial-item box-wrapper">
      <Icon icon="quote-icon" size={64} className="quote-icon" />
      <h5 className="h5">{review}</h5>
      <div className="testimonial-info">
        <GatsbyImage alt={reviewer} image={getImage(reviewerPhoto)} />
        <div>
          <p className="reviewer-name">{reviewer}</p>
          <p className="reviewer-title">{reviewerTitle}</p>
        </div>
      </div>
    </div>
  )
}
