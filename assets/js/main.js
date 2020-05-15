const logForm = document.getElementById('logForm');
const regForm = document.getElementById('regForm');

const logInBtn = document.getElementById('loginBtn');
const registerSubBtn = document.getElementById('registerSubmitBtn');
//const logInModal = document.getElementById('LogInformModal');

/*****************LOGIN MODAL *******************/

logInBtn.addEventListener('click', showLogInForm);

function showLogInForm(event) {
  event.preventDefault();
  const logInModal = document
    .getElementById('logInFormModal')
    .classList.add('show');

  /*****************REGISTER AND LOGIN VALIDATION *******************/

  const userEmail = document.getElementById('registerEmail');
  const userPassword = document.getElementById('registerPassword');
  const userConfirmPassword = document.getElementById('confirmPassword');
  const logInEmail = document.getElementById('logInEmail');
  const logInPassword = document.getElementById('logInPassword');

  function Person(email, password) {
    this.email = email;
    this.password = password;
  }

  const userDatabase = [];

  regForm.onsubmit = (e) => {
    postNewUserData(event);
  };
  logForm.onsubmit = (e) => {
    checkLogin(event);
  };

  function postNewUserData(event) {
    event.preventDefault();

    const userEmailVal = userEmail.value;
    const userPassVal = userPassword.value;
    const userConfirmVal = userConfirmPassword.value;

    if (userPassVal != userConfirmVal) {
      alert('Passwords do not match!');
    } else {
      const newUser = new Person(userEmailVal, userPassVal);

      fetch('https://reqres.in/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const newUserData = {
            id: data.id,
            email: data.email,
            password: data.password,
          };

          userDatabase.push(newUserData);
          console.log(userDatabase);
        })
        .catch((error) => console.error(error));
    }
  }
}
