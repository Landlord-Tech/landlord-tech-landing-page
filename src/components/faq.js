import React from "react"
import Collapsible from "react-collapsible"
import ReactMarkdown from "react-markdown"
import Icon from "./Icon"

const Faq = ({ data }) => {
  // Check if data is an array before mapping
  if (!Array.isArray(data)) {
    // You can either return null, an empty fragment, or some placeholder content
    return null; // or <>No FAQs available</> or any other placeholder you prefer
  }

  return (
    <>
      {data.map((q, i) => (
        <Collapsible
          key={i}
          transitionTime={300}
          trigger={
            <div className="trigger-inner">
              <h4 className="h4">{q.faqQuestion}</h4>
              <Icon
                icon="plus"
                className="plus"
                color="#007FFF"
                size={24}
              />
              <Icon
                icon="minus"
                className="minus"
                color="#007FFF"
                size={24}
              />
            </div>
          }
        >
          <ReactMarkdown>{q.faqAnswer}</ReactMarkdown>
        </Collapsible>
      ))}
    </>
  )
}

export default Faq
