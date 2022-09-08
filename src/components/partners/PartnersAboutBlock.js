import * as React from "react"
import { usePartnersDetailData } from "../../fetchHooks/usePartnersDetail"

export default () => {
  const { partnerName, address, about, buttonName, buttonUrl } =
    usePartnersDetailData()

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
