import React, { useState } from "react"
import Icon from "./Icon"
import Select from "./Select"
import { useContactFormData } from "../fetchHooks/useContactForm"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    inquiryType: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const {
    contactFormHeading,
    contactFormBtn,
    formSuccessMessageHeading,
    formSuccessMessageSubhead,
  } = useContactFormData()

  const [success, setSuccess] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-us", ...formState }),
    })
      .then(() => setSuccess(true))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const options = [
    { value: "demoRequest", label: "Demo request" },
    { value: "generalInquiry", label: "General inquiry" },
    { value: "other", label: "Other" },
  ]

  return (
    <div className="contact-form">
      <div className={`thanks-view ${success ? "thanks-show" : ""}`}>
        <h2 className="h2">{formSuccessMessageHeading}</h2>
        <p>{formSuccessMessageSubhead}</p>
        <Icon icon="check-circle" size={150} />
      </div>
      <div className={`${success ? "form-hide" : ""}`}>
        <h2 className="h2">{contactFormHeading}</h2>
        <form
          onSubmit={handleSubmit}
          name="contact-us"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          <div className="input-field">
            <Select
              options={options}
              onChange={e => setFormState({ inquiryType: e.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="Full Name"
              required={true}
            />
          </div>

          <div className="input-field">
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleChange}
              value={formState.company}
              placeholder="Company Name"
            />
          </div>

          <div className="input-field">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Work Email"
              required={true}
            />
          </div>

          <div className="input-field">
            <input
              type="phone"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={formState.phone}
              placeholder="Phone"
              required={true}
            />
          </div>
          <div className="input-field">
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formState.message}
              placeholder="Message"
              required={true}
            />
          </div>

          <button className="btn btn-md primary min-130" type="submit">
            {contactFormBtn}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
