/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
 

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
      labelElem.className = "visually-hidden" // Added the visibility hidden class here.

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


 // Handle Sliders:
 let sliderHandles = document.querySelectorAll('.rc-slider-handle[role="slider"]');
  
 sliderHandles.forEach((slider, index) => {
   // If slider already has an aria-label, skip
   if (!slider.hasAttribute("aria-label")) {
     // Find the closest heading or relevant label for the slider
     let labelElem = slider.closest(".rangeInput-wrapper").previousElementSibling;

     if (labelElem && labelElem.tagName === "H5") {
       let labelText = labelElem.textContent.trim();
       slider.setAttribute("aria-label", labelText);
     } else {
       slider.setAttribute("aria-label", `Slider ${index + 1}`);
     }
   }
 });

 // Handle Comboboxes:
 let comboBoxes = document.querySelectorAll('input[role="combobox"]');
 comboBoxes.forEach(comboBox => {
   if (!comboBox.hasAttribute("aria-label") && !comboBox.hasAttribute("aria-labelledby")) {
     // If there's no label, provide a generic one (this can be enhanced)
     comboBox.setAttribute("aria-label", "Select an option");
   }
 });



}
