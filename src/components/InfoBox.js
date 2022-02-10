import * as React from "react"
import Icon from "./Icon"

export default ({ title, content, buttonName, buttonUrl, icon }) => {
  return (
    <div className="info-box box-wrapper">
      <Icon icon={icon} size={82} />
      <h4 className="h4">{title}</h4>
      <p>{content}</p>
      <a href={buttonUrl} rel="noreferrer" className="btn btn-lg primary">
        {buttonName}
      </a>
    </div>
  )
}
