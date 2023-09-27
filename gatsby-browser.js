/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
    // Code for label element
    let label = document.querySelector('.switch');
    if(label) {
        // Create a text node with the desired text
        let textNode = document.createTextNode('Toggle option: ');

        // Create a span element to wrap the text node
        let span = document.createElement('span');
        span.className = 'visually-hidden';

        // Append the text node to the span element
        span.appendChild(textNode);

        // Insert the span element as the first child of the label element
        label.insertBefore(span, label.firstChild);
    }

    // Code for input element
    let inputElement = document.querySelector('input[max="100000"]');
    if(inputElement) {
        // Add the missing 'type' attribute
        inputElement.setAttribute('type', 'number');
        
        // Create a label element
        let labelElement = document.createElement('label');
        labelElement.textContent = 'Enter a value:';
        
        // Generate a unique ID for the input element
        let uniqueID = 'input-' + new Date().getTime();
        inputElement.setAttribute('id', uniqueID);
        
        // Set the 'for' attribute of the label element to match the ID of the input element
        labelElement.setAttribute('for', uniqueID);
        
        // Insert the label element before the input element in the DOM
        inputElement.parentNode.insertBefore(labelElement, inputElement);
    }

    let sliderElement = document.querySelector('.rc-slider-handle[role="slider"]');
    if(sliderElement) {
        // Add the 'aria-label' attribute to the slider element
        sliderElement.setAttribute('aria-label', 'ESA Percentage Slider');
    }

    let buttonElement = document.querySelector('.go-top-btn');
    if(buttonElement) {
        // Add the 'aria-label' attribute to the button element
        buttonElement.setAttribute('aria-label', 'Go to Top');
    }
};
