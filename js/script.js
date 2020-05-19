var nomeUtente = prompt('Inserisci il tuo nome');

var cognomeUtente = prompt('Inserisci il tuo cognome');

var colorePreferito = prompt('Inserisci il tuo colore preferito');

var annoCorrente = prompt("Inserisci l'anno corrente");

var sottrazione = annoCorrente - 2000;


document.getElementById('password').innerHTML = 'La tua password è ' + nomeUtente + cognomeUtente + colorePreferito + sottrazione;
