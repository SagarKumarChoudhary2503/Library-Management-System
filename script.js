document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

    
        if (email === 'sagar@123' && password === '123') {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            window.location.href = 'books.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
    document.getElementById("forgot-password").addEventListener("click", function(event) {
        event.preventDefault();
        var email = prompt("Please enter your email:");
        if (email === 'sagar@123') {
            var newPassword = prompt("Please enter your new password:");
            if (newPassword) {
                localStorage.setItem('password', newPassword);
                alert("Password reset successful!");
                window.location.href = 'books.html';
            } else {
                alert("New password not provided. Password reset canceled.");
            }
        } else {
            alert("Invalid email. Password reset canceled.");
        }
    });
});
