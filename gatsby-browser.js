/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
  // Code for label element
  let label = document.querySelector(".switch")
  if (label) {
    // Create a text node with the desired text
    let textNode = document.createTextNode("Toggle option: ")

    // Create a span element to wrap the text node
    let span = document.createElement("span")
    span.className = "visually-hidden"

    // Append the text node to the span element
    span.appendChild(textNode)

    // Insert the span element as the first child of the label element
    label.insertBefore(span, label.firstChild)
  }

  // Code for input element
  let inputElement = document.querySelector('input[max="100000"]')
  if (inputElement) {
    // Add the missing 'type' attribute
    inputElement.setAttribute("type", "number")

    // Create a label element
    let labelElement = document.createElement("label")
    labelElement.textContent = "Enter a value:"

    // Generate a unique ID for the input element
    let uniqueID = "input-" + new Date().getTime()
    inputElement.setAttribute("id", uniqueID)

    // Set the 'for' attribute of the label element to match the ID of the input element
    labelElement.setAttribute("for", uniqueID)

    // Insert the label element before the input element in the DOM
    inputElement.parentNode.insertBefore(labelElement, inputElement)
  }

  let sliderElements = document.querySelectorAll(
    '.rc-slider-handle[role="slider"]'
  )
  sliderElements.forEach((slider, index) => {
    // Find the closest heading or relevant label for the slider
    let labelElem = slider.closest(".rangeInput-wrapper").previousElementSibling
    if (labelElem && labelElem.tagName === "H5") {
      let labelText = labelElem.textContent.trim()
      // Use the found label as the aria-label for the slider
      slider.setAttribute("aria-label", labelText)
    } else {
      // Fallback to a generic label if the specific label is not found
      slider.setAttribute("aria-label", `Slider ${index + 1}`)
    }
  })

  let comboboxInput = document.querySelector('input[role="combobox"]')
  if (comboboxInput) {
    comboboxInput.setAttribute("aria-label", "Select an option")
  }

  let buttonElement = document.querySelector(".go-top-btn")
  if (buttonElement) {
    // Add the 'aria-label' attribute to the button element
    buttonElement.setAttribute("aria-label", "Go to Top")
  }

  // Added code for accessibility enhancement of the PDF download link
  let downloadLink = document.querySelector(
    'a[href="/assets/Changing-World-of-Rental-Property-Pet-Damage.pdf"]'
  )
  if (downloadLink) {
    downloadLink.setAttribute(
      "aria-label",
      "Download Changing World of Rental Property Pet Damage PDF"
    )
  }

  // Handle unlabeled checkboxes:
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  checkboxes.forEach(checkbox => {
    if (!checkbox.hasAttribute("id")) {
      checkbox.setAttribute("id", "checkbox-" + new Date().getTime())
    }

    const checkboxId = checkbox.getAttribute("id")
    let associatedLabel = document.querySelector(`label[for="${checkboxId}"]`)

    if (!associatedLabel) {
      let nextSibling = checkbox.nextElementSibling

      // If the next sibling is a span or strong tag, use its text as a label
      if (
        nextSibling &&
        (nextSibling.tagName === "SPAN" || nextSibling.tagName === "STRONG")
      ) {
        const labelText = nextSibling.textContent

        let labelElem = document.createElement("label")
        labelElem.setAttribute("for", checkboxId)
        labelElem.className = "visually-hidden"
        labelElem.textContent = labelText

        checkbox.parentNode.insertBefore(labelElem, checkbox)
      } else {
        // If no appropriate label is found, use a generic aria-label
        checkbox.setAttribute("aria-label", "Checkbox without a label")
      }
    }
  })

  // Handle unlabeled textareas and inputs:
  const formControls = document.querySelectorAll(
    'textarea, input:not([type="hidden"])'
  )

  formControls.forEach(control => {
    const controlId = control.getAttribute("id")
    let associatedLabel = document.querySelector(`label[for="${controlId}"]`)

    if (!associatedLabel) {
      let labelElem = document.createElement("label")
      labelElem.setAttribute("for", controlId)

      switch (control.tagName.toLowerCase()) {
        case "textarea":
          labelElem.textContent = "Your Message:"
          break
        case "input":
          // Use control name or a generic label here
          labelElem.textContent = control.getAttribute("name") || "Input:"
          break
        default:
          labelElem.textContent = "Label:"
      }

      control.parentNode.insertBefore(labelElem, control)
    }
  })

  // Find all checkboxes with the data-controls attribute
  const checkboxesWithControls = document.querySelectorAll(
    'input[type="checkbox"][data-controls]'
  )

  checkboxesWithControls.forEach(checkbox => {
    const controlledId = checkbox.getAttribute("data-controls")
    const controlledElem = document.getElementById(controlledId)

    if (controlledElem) {
      // Add the aria-controls attribute
      checkbox.setAttribute("aria-controls", controlledId)
    }
  })

  // Find all images within links that don't have an alt attribute
  const imagesWithoutAlt = document.querySelectorAll(
    'a img:not([alt]), a img[alt=""]'
  )

  imagesWithoutAlt.forEach(img => {
    // Set a default alt text
    img.setAttribute("alt", "Linked Image")
  })

  // Get all focusable elements, which includes links (a), buttons, and elements with a tabindex of 0.
  let focusableElements = [
    ...document.querySelectorAll('a, button, [tabindex="0"]'),
  ]

  focusableElements.forEach(element => {
    // Add an event listener for when the element receives focus.
    element.addEventListener("focus", () => {
      // Check if the currently focused element has its outline style turned off.
      if (
        window.getComputedStyle(element).outlineWidth === "0px" ||
        window.getComputedStyle(element).outlineStyle === "none"
      ) {
        // If the outline is off, provide a custom outline style for better accessibility.
        element.style.outline = "2px solid blue" // This style can be adjusted to match the website's theme.
      }
    })

    // Add an event listener for when the element loses focus.
    element.addEventListener("blur", () => {
      // Reset the outline style when the element is no longer focused.
      element.style.outline = ""
    })
  })
}
