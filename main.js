// calcolo del prezzo del biglietto


//chiedere quanti anni ha l'acquirente
var etaAcquirente = parseInt(prompt("inserisca qui la sua età"));

//chiedere quanti chilometri vorrà percorrere
var chilometri = parseInt(prompt("inserisca i km da percorrere"));

//inserire prezzo al km (0.21euro)
var euroCadKm = 0.21;

//calcolare il prezzo base del biglietto
var prezzoBase = chilometri * euroCadKm;

//sconto del 40% calcolato
var prezzoMaggiori

//sconto calcolato al 20%
var prezzoMinori

//nessuno sconto
var prezzoOver

console.log("età acquirente = " + etaAcquirente);
console.log("chilometri da percorrere = " + chilometri);
console.log("costo base della tratta esente sconti = " + prezzoBase + " euro");

// /*applicare lo sconto in base alla fascia di età,20% <18 e 40% >65*/
if (etaAcquirente < 17) {
  prezzoMinori = (prezzoBase - (prezzoBase * 20 / 100));
} else if (etaAcquirente > 18){
  prezzoMaggiori = (prezzoBase - (prezzoBase * 40 / 100));
} else (etaAcquirente > 65){
  prezzoOver = prezzoBase ;
}

console.log("il costo del biglietto per i minorenni è di " + prezzoMinori);
console.log("il costo del biglietto per i maggiorenni è di " + prezzoMaggiori);
console.log("il costo del biglietto per gli over 65 è di " + prezzoOver);
