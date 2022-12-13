const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

const characters = [
    'macaco001',
    'macaco002',
    'macaco003',
    'macaco004',
    'macaco005',
    'macaco006',
    'macaco007',
    'macaco008',
    'macaco009',
    'macaco010',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';

const checkendgame = () => {
    const disabledcards = document.querySelectorAll('.disabledcard');

    if (disabledcards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns ${spanPlayer.innerHTML}! Você conseguiu em ${timer.innerHTML} segundos!`);
    }
}

const checkCards = () => {
    const firstCharacter = firstcard.getAttribute('data-character');
    const secondCharacter = secondcard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {

        firstcard.firstChild.classList.add('disabledcard');
        secondcard.firstChild.classList.add('disabledcard');

        firstcard = '';
        secondcard = '';

        checkendgame();

    } else {
        setTimeout(() => {
        
        firstcard.classList.remove('revealcard');
        secondcard.classList.remove('revealcard');

        firstcard = '';
        secondcard = '';
        }, 500); 
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('revealcard')) {
        return;
    }

    if (firstcard == '') {

        target.parentNode.classList.add('revealcard');
        firstcard = target.parentNode;

    } else if (secondcard == '') {
        target.parentNode.classList.add('revealcard');
        secondcard = target.parentNode;

        checkCards();

    }

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });

}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

startTimer();
loadGame();
}


/*const createCard = () => {

    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);
}

createCard(); */