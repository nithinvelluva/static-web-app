document.getElementById('welcomeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const message = name ? `Hello, ${name}! 👋` : `Please enter a name.`;
  document.getElementById('message').textContent = message;
});
