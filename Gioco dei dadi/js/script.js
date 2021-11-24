/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const button = document.getElementById("bottone");
const testo = document.querySelector(".testo");

button.addEventListener("click", function () {
    const user = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;

if (user > computer) {
        testo.innerHTML = "<h1> Ha vinto l'utente! <3 </h1>";
    } else {
        testo.innerHTML = "<h1> Ha vinto il computer! :( </h1>";
    }
})

