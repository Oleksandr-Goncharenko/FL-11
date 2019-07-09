const koeficientIncrement = 4;
const prizeDiminishing = 2;
const prizeIncrement = 2;
const defaultAttempts = 3;
const defaultKoeficient = 9;
const defaultPrize = 100;
let randomKoeficient = 9;
let attemptsLeft = 3;
let possiblePrizeOriginal = 100;
let possiblePrize = 100;
let totalPrize = 0;
let continueMessage = 'Do you want to play a game?';

for (;;) {
  const areWePlaying = confirm(continueMessage);
  if (areWePlaying) {
    let currentBall = Math.floor(Math.random() * randomKoeficient);
    for (;;) {
      let userEntry = prompt(`Choose a roulette pocket number from 0 to ${randomKoeficient - 1}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$\n`);
      if (parseFloat(userEntry) === currentBall) {
        totalPrize = totalPrize + possiblePrize;
        randomKoeficient = randomKoeficient + koeficientIncrement;
        possiblePrizeOriginal = possiblePrizeOriginal * prizeIncrement;
        possiblePrize = possiblePrizeOriginal;
        attemptsLeft = defaultAttempts;
        let winnerMessage = confirm(`Congratulation, you won! Your prize is ${totalPrize}$. Do you want to contunue?`);
        if (winnerMessage) {
          currentBall = Math.floor(Math.random() * randomKoeficient);
        } else {
          alert(`Thank you for your participation. Your prize is ${totalPrize}$`);
          randomKoeficient = defaultKoeficient;
          attemptsLeft = defaultAttempts;
          possiblePrizeOriginal = defaultPrize;
          possiblePrize = possiblePrizeOriginal;
          totalPrize = 0;
          continueMessage = 'Do you want to play a game again?';
          break
        }
      } else {
        possiblePrize = possiblePrize / prizeDiminishing;
        attemptsLeft--;
        if (attemptsLeft === 0) {
          alert(`Thank you for your participation. Your prize is ${totalPrize}$`);
          randomKoeficient = defaultKoeficient;
          attemptsLeft = defaultAttempts;
          possiblePrizeOriginal = defaultPrize;
          possiblePrize = possiblePrizeOriginal;
          totalPrize = 0;
          continueMessage = 'Do you want to play a game again?';
          break
        }
      }
    }
  } else {
    alert('You did not become a billionaire, but can.');
    break
  }
}