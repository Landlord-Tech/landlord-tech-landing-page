/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

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
}
