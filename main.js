// calcolo del prezzo del biglietto


//chiedere quanti anni ha l'acquirente
var etaAcquirente = parseInt(prompt("inserisca qui la sua età"));

//chiedere quanti chilometri vorrà percorrere
var chilometri = parseInt(prompt("inserisca i km da percorrere"));

//inserire prezzo al km (0.21euro)
var euroCadKm = 0.21;

//calcolare il prezzo base del biglietto
var prezzoBase = chilometri * euroCadKm;

console.log("età acquirente = " + etaAcquirente);
console.log("chilometri da percorrere = " + chilometri);
console.log("costo base della tratta esente sconti = " + prezzoBase + " euro");

/*applicare lo sconto in base alla fascia di età,20% <18 e 40% >65*/
