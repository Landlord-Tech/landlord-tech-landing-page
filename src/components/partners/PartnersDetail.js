import * as React from "react"
import PartnerInfoBlock from "./PartnerInfoBlock"
import PartnersAboutBlock from "./PartnersAboutBlock"

export default ({ data }) => {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partners-detail-wrapper">
          <PartnerInfoBlock data={data} />
          <PartnersAboutBlock data={data} />
        </div>
      </div>
    </section>
  )
}
