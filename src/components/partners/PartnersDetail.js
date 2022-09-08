import * as React from "react"
import PartnerInfoBlock from "./PartnerInfoBlock"
import PartnersAboutBlock from "./PartnersAboutBlock"

export default ({ frontmatter }) => {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partners-detail-wrapper">
          <PartnerInfoBlock frontmatter={frontmatter} />
          <PartnersAboutBlock frontmatter={frontmatter} />
        </div>
      </div>
    </section>
  )
}
