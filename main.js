// Handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find matching user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect to dashboard or another page if needed
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle registration
function handleRegistration(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Fetch existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('Email is already registered. Please log in.');
        return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please log in.');
    window.location.href = 'login.html'; // Redirect to login page
}
