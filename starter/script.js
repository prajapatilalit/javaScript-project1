'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//create function for dry principle code or refractoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const numberStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const numberStyleBackgroundColor = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// console.log((document.querySelector('.number').textContent = secretNumber));
displayNumber('?');
// document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when the player have no number
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
    //when player win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' 💖 Correct Number!';
    displayMessage('💖 Correct Number!');
    displayNumber(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;
    numberStyleBackgroundColor('#60b347');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    numberStyleWidth('30rem');
    // document.querySelector('.number').style.width = '30rem';

    // high score logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guesses is  wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 TO High!' : '📉 TO Low!');
      /*
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 TO High!' : '📉 TO Low!';*/
      score--;
      displayScore(score);
      // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😠 You lost the game!');
      // document.querySelector('.message').textContent = '😠 You lost the game!';
      displayScore(0);

      // document.querySelector('.score').textContent = 0;
    }
  }
  //when guess to high
  /*} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 TO High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😠 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 TO Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😠 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
// reset to a new game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing ...');
  // document.querySelector('.message').textContent = 'Start Guessing ...';
  displayScore(score);

  // document.querySelector('.score').textContent = score;
  displayNumber('?');
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  numberStyleBackgroundColor('#222');
  // document.querySelector('body').style.backgroundColor = '#222';
  numberStyleWidth('15rem');
  // document.querySelector('.number').style.width = '15rem';
});
