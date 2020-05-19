var nomeUtente = prompt('Inserisci il tuo nome');

var cognomeUtente = prompt('Inserisci il tuo cognome');

var colorePreferito = prompt('Inserisci il tuo colore preferito');

var annoCorrente = prompt("Inserisci l'anno corrente");

var sottrazione = annoCorrente - 2000;

var password = nomeUtente + cognomeUtente + colorePreferito + sottrazione;

document.getElementById('password').innerHTML = 'LA TUA PASSWORD È:<br>' + password;
