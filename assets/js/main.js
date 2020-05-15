const regForm = document.getElementById('regForm');
const logForm = document.getElementById('logForm');

const logInBtn = document.getElementById('loginBtn');
const registerSubBtn = document.getElementById('registerSubmitBtn');

/*****************LOGIN MODAL *******************/

logInBtn.addEventListener('click', showLogInForm);

function showLogInForm(event) {
  event.preventDefault();
  const logInModal = document
    .getElementById('LogInformModal')
    .classList.add('show');
}

/*****************REGISTER & LOGIN VALIDATION *******************/

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

var submitOk = false;

function checkLogin(event) {
  if (submitOk == false) {
    event.preventDefault();
  }

  const logInEmailVal = logInEmail.value;
  const logInPasswordVal = logInPassword.value;

  var newItem = userDatabase.find((item) => item.email === logInEmailVal);

  if (newItem != undefined) {
    var newItemPass = newItem.password;

    if (logInPasswordVal == newItemPass) {
      alert('Login Succesful');

      submitOk = true;
      logForm.submit();
    } else {
      alert('Password is wrong');
      submitOk = false;
    }
  } else {
    alert('Email is not registered');
    submitOk = false;
  }
}
