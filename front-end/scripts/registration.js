document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');
  
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;
  
      try {
        const response = await fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password, role })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          messageDiv.textContent = 'Registration successful';
          messageDiv.style.color = 'green';
          window.location.href = 'login.html';
        } else {
          messageDiv.textContent = data.error || 'Failed to register';
          messageDiv.style.color = 'red';
        }
      } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'An error occurred';
        messageDiv.style.color = 'red';
      }
    });
  });
  