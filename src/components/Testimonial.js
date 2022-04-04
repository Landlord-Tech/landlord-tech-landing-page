import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icon from "./Icon"

export default ({ review, reviewer, reviewerTitle, reviewerPhoto }) => {
  return (
    <div className="testimonial-item box-wrapper">
      <Icon icon="quote-icon" size={64} className="quote-icon" />
      <p className="review">{review}</p>
      <div className="testimonial-info">
        <h5 className="reviewer-name h5">{reviewer}</h5>
        <p className="reviewer-title">{reviewerTitle}</p>
      </div>
    </div>
  )
}
