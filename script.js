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
