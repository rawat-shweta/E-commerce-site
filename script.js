// Get the login button element
var loginButton = document.getElementById("login-icon");

// Get the modal element
var modal = document.getElementById("login-modal");

// Get the close button element inside the modal
var closeButton = document.querySelector(".close1");

// Open the modal when the login button is clicked
loginButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}); // <-- Missing closing parenthesis and curly bracket here


//////// register modal//////////









