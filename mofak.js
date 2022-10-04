/* The Guessing Game */
/* Dom */
/* prompt() */
/* 1-Lösung mit while*/
const res = prompt("Guess a number between 1-10"); /// res ===>1
function guess() {
  const rdm = Math.floor(Math.random() * 3) + 1; // mdn 
  let count = 1;
  while (res !== rdm && count < 3) { // loop
    prompt("Wrong. Try again");
    count++;
  }
  if (res == rdm && count <= 3) {
    alert(`Success ,Die Nummer war ${rdm} ,Attempt:${count} `);
  } else {
    alert(
      `Sorry ,Die Nummer war falsch ,die richtige Nummer ist ${rdm} ,Attempt:  ${count}  `
    );
  }
}
guess();