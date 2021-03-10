'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log((document.querySelector('.number').textContent = secretNumber));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ No Number')
    );
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = ' 👉 Correct Number')
    );
  } else if (guess > secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = '📈 TO High')
    );
  } else if (guess < secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = ' 📉 TO Low')
    );
  }
});
