document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/user/login', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          messageDiv.textContent = 'Login successful';
          messageDiv.style.color = 'green';
  
          // Redirect to index.html after successful login
          window.location.href = 'index.html';
        } else {
          messageDiv.textContent = data.error || 'Failed to login';
          messageDiv.style.color = 'red';
        }
      } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'An error occurred';
        messageDiv.style.color = 'red';
      }
    });
  });
  