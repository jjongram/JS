const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLoginBtnClick() {
  const username = loginInput.value;
  if (value === '') {
    alert('Please write your name');
  } else if (username.length) {
    alert('Your name is too long.');
  }
}

loginButton.addEventListener('click', onLoginBtnClick);
