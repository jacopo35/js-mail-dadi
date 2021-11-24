/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/



const mail = prompt("dammi la tua mail");

const mails = ["jaczor00@gmail.com","thomas-23@teacher.it", "elisabetta@-24teacher.it"]

let cond = false;

for (let i = 0; i < mails.length; i++) {
    if (mails[i] == mail) {
        cond = true;
    }
}

if (cond == true) {
    console.log("puoi accedere");
} else {
    console.log("non puoi accedere");
}
