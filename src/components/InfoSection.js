import * as React from "react"

export default ({ title, content, buttonName, buttonUrl }) => {
  return (
    <section className="info-section">
      <div className="content-wrapper">
        <h2 className="h2">{title}</h2>
        <h5 className="h5">{content}</h5>
        <a href={buttonUrl} rel="noreferrer" className="btn btn-lg secondary">
          {buttonName}
        </a>
      </div>
    </section>
  )
}
