const input = document.querySelector('.logininput');
const button = document.querySelector('.loginbutton');
const form = document.querySelector('.loginform');

const validateinput = ({ target }) => {
    if (target.value.length > 0) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }

}
const handlesubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';

}

input.addEventListener('input', validateinput);
form.addEventListener('submit', handlesubmit);