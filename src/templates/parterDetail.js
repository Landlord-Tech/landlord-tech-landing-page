import * as React from "react"
import Layout from "../components/layout"
import Faq from "../components/faq"
import Seo from "../components/seo"
import { useFAQListData } from "../fetchHooks/useFaqList"
import PartnersDetail from "../components/partners/PartnersDetail"

const Partners = () => {
  const { faqHeading, faqList } = useFAQListData()

  const partnerData = {
    metaTitle: "Partners metaTitle",
    metaDescription: "Partners metaDescription",
    logo: "https://myresman.com/wp-content/uploads/2019/11/Resman_Color_RGB_ForWeb-01.png",
    partnerName: "ResMan",
    address: "Plano, Texas, United States",
    about:
      "ResMan® property management software supports your business growth and community engagement through a platform that better connects the Multifamily landscape. Our software empowers property managers and investors to operate, market and push their business forward. ",
    buttonName: "Learn more",
    buttonUrl: "#",
    partnerDetailsList: [
      {
        label: "SERVICES OFFERED",
        content: "Integration between ResMan and OurPetPolicy",
      },
      {
        label: "REGIONS",
        content: "North America",
      },
      {
        label: "PARTNER TYPE",
        content: "Integration Partner",
      },
    ],
    faqList: [{ faqQuestion: "really?", faqAnswer: "Yes!" }],
  }

  return (
    <Layout>
      <Seo
        title={partnerData.metaTitle}
        description={partnerData.metaDescription}
      />
      <section>
        <PartnersDetail data={partnerData} />
      </section>
      <section className="section faq-section" id="faq">
        <div className="container">
          <h2 className="h2 text-center">{faqHeading}</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default Partners
