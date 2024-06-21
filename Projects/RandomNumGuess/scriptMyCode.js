const randNum = Math.round(Math.random() * 100 + 1)
console.log(randNum);
let temp = 0;

let arr = [];

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (temp != 5) {

        const guessNum = parseInt(document.querySelector('#guessField').value);

        if (randNum === guessNum) {
            document.querySelector('.low0rhi').innerHTML = "Congrats! You Guess the right number."
            temp = 5;
        } else {
            arr.push(guessNum);
            let guesses = document.querySelector('.guesses');
            guesses.innerHTML = arr;

            temp += 1;

            let updateGuess = document.querySelector('.lastResult');
            updateGuess.innerHTML = 5 - temp;
        }
    }
})