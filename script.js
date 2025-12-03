document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("message");

    // Simple validation
    if (username === "" || email === "" || password === "") {
        msg.textContent = "Please fill out all fields.";
        return;
    }

    if (password.length < 6) {
        msg.textContent = "Password must be at least 6 characters.";
        return;
    }

    // If all good
    msg.style.color = "green";
    msg.textContent = "Registration successful!";

    // Example: here you could send data to a server
    console.log({
        username: username,
        email: email,
        password: password
    });
});
