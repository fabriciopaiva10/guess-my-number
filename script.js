'use strict';

/*console.log(document.querySelector('.message').textContent);
//.message para pegar o elemento cuja classe é "message". se fosse id, usaríamos #!!!
//querySelector é um metódo presente no objeto Document.

document.querySelector('.message').textContent = 'É O FLAMENGOOOO';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 22;
document.querySelector('.score').textContent = 100;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 500;
console.log(document.querySelector('.guess').value);*/

//--------------------------------------------------------------
//trunc p remover a parte negativa, x50 pra ir de 1 a 49, +1 pra ir de 1 a 50
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score; //bom ter essa variável no código, e n só no DOM
//1 argumento: tipo de evento (no caso, um click)
//2 argumento: reação pelo evento (o que deve acontecer após o click)
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess); //normalmente qd recebemos um dado do usuário, esse dado é uma string
  //document.querySelector('.message').textContent = 'pão';

  //se não for um número maior que 0 (falsy value), vai entrar no if
  //When there's no valid input
  if (!guess || guess > 50) {
    // document.querySelector('.message').textContent =
    //   'TYPE A NUMBER BETWEEN 1 AND 50! 🚫';
    displayMessage('TYPE A NUMBER BETWEEN 1 AND 50! 🚫');
  }

  //When the player wins
  else if (guess === secretNumber) {
    displayMessage('YOU WON');
    // document.querySelector('.message').textContent = 'YOU WON';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //changing the background color to green
    document.querySelector('.number').style.width = '30rem'; //changing the size of the square
    let btn = document.querySelector('.check');
    btn.disabled = true; //disabling the button "check"

    score = Number(document.querySelector('.score').textContent);
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When the guess is diferent
  else if (guess !== secretNumber) {
    score = Number(document.querySelector('.score').textContent);
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'TOO HIGH' : 'TOO LOW';
    } else {
      // document.querySelector('.message').textContent = 'GAME OVER';
      displayMessage('GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   score = Number(document.querySelector('.score').textContent);
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'TOO HIGH';
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When the guess is too low
  // } else if (guess < secretNumber) {
  //   score = Number(document.querySelector('.score').textContent);
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'TOO LOW';
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 25;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  let btn = document.querySelector('.check');
  btn.disabled = false;
});
