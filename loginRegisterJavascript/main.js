document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login successful!');
        document.getElementById('loginForm').reset();
    } else {
        alert('Invalid username or password!');
    }
});
