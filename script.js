document.addEventListener('DOMContentLoaded', function() {
    const submitLoginButton = document.getElementById('submit-login');
    const loginMessage = document.getElementById('login-message');

    // Predefined credentials (for demo purposes)
    const validUsername = 'team61';
    const validPassword = 'team61';

    // Handle login form submission
    if (submitLoginButton) {
        submitLoginButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check credentials
            if (username === validUsername && password === validPassword) {
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect after a delay
                }, 2000);
            } else {
                loginMessage.textContent = 'Invalid username or password.'; // Error message
                loginMessage.style.color = 'red';
            }
        });
    }
});
