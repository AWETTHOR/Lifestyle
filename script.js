
//  VARIABLES

// iconElem
const iconElem = document.getElementById("iconElem");

// toggleContainer 
const toggleContainer = document.querySelector(".toggle-container");

// CloseBtn
const CloseBtn = document.getElementById("closeBtn");

console.log(CloseBtn)
console.log(iconElem)
console.log(toggleContainer)

// Toggle the IconsEle
function getContainer() {

    const isClicked = true;

    if (!isClicked) {
        toggleContainer.classList.remove("toggleContainer");
    } else {
        toggleContainer.classList.add("toggleContainer");
    }
}

iconElem.addEventListener("click", getContainer);

 
// Close the Toggle Container
function removeContainer() {
    const isClicked = true; 

    if (isClicked) {
        toggleContainer.classList.remove("toggleContainer");
    } else {
        toggleContainer.classList.add("toggleContainer");
    }
}

CloseBtn.addEventListener("click", removeContainer);


