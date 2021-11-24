/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/



// const mail = prompt("Digita la tua mail");
const input = document.querySelector("input");

const container = document.querySelector(".container");
const mails = ["jaczor00@gmail.com","thomas-23@teacher.it", "elisabetta@-24teacher.it"]
const button = document.querySelector("button");
const remove = document.querySelector(".remove")
let cond = false;

/*remove.addEventListener("click", function () {
    container.innerHTML = "";
    input.value = "";
})
*/

button.addEventListener("click", function () {
    for (let i = 0; i < mails.length; i++) {
        if (mails[i] == input.value) {
            cond = true;
        }
    }

    if (cond == true) {
        container.innerHTML = "<h1> Ora puoi accedere :) </h1>"
    } else {
        container.innerHTML = "<h1> Non puoi accedere :( </h1>"
    }
})