document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Get the values from the input fields
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('errorMsg');

    // The hardcoded credentials
    var correctEmail = "Lokesh@gmail.com";// gmail (specific)
    var correctPassword = "Lokesh123";// password (specific)

    // Check if inputs match
    if (email === correctEmail && password === correctPassword) {
        // Redirect to the Home page
        window.location.href = "Home.html";
    } else {
        // Show error message
        errorMsg.style.display = "block";
    }
});