
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Login functionality not implemented.");
  });
  
  document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.textContent = type === 'password' ? '👁️' : '🙈';
  });
  
  document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    if (!email.includes('@') || !email.includes('.')) {
      this.style.borderColor = 'red';
    } else {
      this.style.borderColor = 'green';
    }
  });
  