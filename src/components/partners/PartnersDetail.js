import * as React from "react"
import PartnerInfoBlock from "./PartnerInfoBlock"
import PartnersAboutBlock from "./PartnersAboutBlock"

export default () => {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partners-detail-wrapper">
          <PartnerInfoBlock />
          <PartnersAboutBlock />
        </div>
      </div>
    </section>
  )
}
