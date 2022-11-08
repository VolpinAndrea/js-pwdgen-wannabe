let nome = prompt("inserisci il nome");
let cognome = prompt("inserisci il cogniome");
let colore = prompt("inserisci il tuo colore preferito");

let password = nome + cognome + colore + "21";

console.log(
    `
    ------ Informazioni ------
    Nome : ${nome}
    Cognome : ${cognome}
    colore preferito : ${colore}
    --------------------------
    La tua password è : ${password}
    `     
);

let num1 = prompt("inserisci un numero");
let num2 = prompt("inserisci il un altro numero");

let password2 = nome + cognome + colore + num1/num2;


console.log(
    `
    ------ Informazioni ------
    Nome : ${nome}
    Cognome : ${cognome}
    colore preferito : ${colore}
    primo numero : ${num1}
    secondo numero : ${num2}
    ${num1} diviso ${num2} = ${num1/num2}
    --------------------------
    La tua password è : ${password2}
    `     
);


