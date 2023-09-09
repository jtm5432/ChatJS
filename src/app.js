import { createButton,loadModal,waitForWindowToLoad ,hideModal } from './Utils.ts';
import {  logWhenLoaded, onloadCallFns ,manageUserList,manageTextareaContent} from './textEditor.ts';

// Define a callback function to be executed when the button is clicked
function onButtonClick() {
    loadModal('loginModal.html',(modal) => {
        
            const inputBox = modal.querySelector('#inputBox');
            const actionButton = modal.querySelector('#actionButton');
            if (inputBox && actionButton) {
                actionButton.onclick = async function() {
                    const inputValue = inputBox.value;        
                    
                    //modal.style.display = "none";
                    //loadModal('textEditorModal.html');
                    //const openWindow = window.open('../views/textEditorModal.html', '_blank');
                   
                   // const ExcuteFns = [UserList]
                    //await waitForWindowToLoad(openWindow) 
                    const openWindow  = document.getElementById("pageContainer");
                    hideModal();
                    const UserList = manageUserList(openWindow,"userList",inputValue);
                };
            }
       
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Create a button using the utility function from Utils.ts
    const utilButton = createButton('Click Me', onButtonClick);
    document.body.appendChild(utilButton);


});
