const logForm = document.getElementById('logForm');
const regForm = document.getElementById('regForm');

const logInBtn = document.getElementById('loginBtn');
const registerSubBtn = document.getElementById('registerSubmitBtn');
const LogInSubBtn = document.getElementById('loginSubmitBtn');
const logInModal = document.getElementById('LogInformModal');

/*****************LOGIN MODAL *******************/

logInBtn.addEventListener('click', showLogInForm);

function showLogInForm(event) {
  event.preventDefault();
  const logInModal = document
    .getElementById('logInFormModal')
    .classList.add('show');
  console.log('hello');
}

/*****************REGISTER VALIDATION *******************/
