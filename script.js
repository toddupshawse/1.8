// Variables with the required messages
var homeMsg = "You selected the Home address";
var workMsg = "You selected the Work address";

// Function that displays alerts based on which radio button is selected
function showAddressAlert() {
    if (document.getElementById("home").checked) {
        alert(homeMsg);
    }
    if (document.getElementById("work").checked) {
        alert(workMsg);
    }
}

// Event listeners for clicking the radio buttons
document.getElementById("home").addEventListener("click", showAddressAlert);
document.getElementById("work").addEventListener("click", showAddressAlert);

