import { createButton,loadModal } from './Utils.ts';

// Define a callback function to be executed when the button is clicked
function onButtonClick() {
    loadModal('loginModal.html',(modal) => {
        
            const inputBox = modal.querySelector('#inputBox');
            const actionButton = modal.querySelector('#actionButton');
            if (inputBox && actionButton) {
                actionButton.onclick = function() {
                    const inputValue = inputBox.value;        
                   
                    modal.style.display = "none";
                };
            }
       
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Create a button using the utility function from Utils.ts
    const utilButton = createButton('Click Me', onButtonClick);
    document.body.appendChild(utilButton);


});
