import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Icon from "../components/Icon"
import { useRequestDemoData } from "../fetchHooks/useRequestDemo"

const RequestDemo = () => {
  const {
    metaTitle,
    metaDescription,
    calendarEventLink,
    demoDuration,
    requestDemoHeading,
    requestDemoInfoList,
  } = useRequestDemoData()

  return (
    <Layout>
      <Seo title={metaTitle} description={metaDescription} />
      <div className="yellow-background-page">
        <section className="section">
          <div className="container request-demo-wrapper">
            <div className="text">
              <h3 className="h3">{requestDemoHeading}</h3>
              <ul>
                {requestDemoInfoList.map(({ requestDemoInfoText }, i) => {
                  return (
                    <li key={i}>
                      <Icon color="#0D0D0D" size={17} icon="check" />
                      {requestDemoInfoText}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="calendly">
              <iframe
                title="Request a demo"
                src={`https://calendly.com/${calendarEventLink}/${demoDuration}min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=fbfcfd&text_color=0D0D0D&primary_color=fcc425`}
                width="100%"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default RequestDemo
