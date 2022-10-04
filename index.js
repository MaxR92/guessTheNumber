let guess = 1;
function guessGame() {
  const randomNumber = Math.ceil(Math.random() * 5);
  const userName = prompt("Enter Username")
  let inputNumber = prompt("Guess a number between 1 - 10");
  do {
    if (randomNumber != inputNumber) {
      guess++;
      console.log(randomNumber);
      inputNumber = prompt(`Wrong!! Try Again ${userName}!`)
    } else if (randomNumber == inputNumber) {
        return alert (`You did it ${userName}. You needed ${guess} attempts. `)
    }
  } while (guess != 3);
  {
    alert(
      "To many attempts, i am sorry " + userName + "! the number was " + randomNumber + ". Restart the page"
    );
  }
}
guessGame();