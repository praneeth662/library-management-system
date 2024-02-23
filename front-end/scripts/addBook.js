document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('addBookForm');
    const messageDiv = document.getElementById('message');
  
    addBookForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
  
      try {
        const response = await fetch('/api/user/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, author })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          messageDiv.textContent = 'Book added successfully';
          messageDiv.style.color = 'green';
        } else {
          messageDiv.textContent = data.error || 'Failed to add book';
          messageDiv.style.color = 'red';
        }
      } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'An error occurred';
        messageDiv.style.color = 'red';
      }
    });
  });
  