"use strict";


// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



let btn = document.querySelector('button');
let number = document.getElementById('numero');
let result = document.getElementById('result');

let print = function(){

    let num = number.value;
    let risultato = num % 2;
    if(risultato == 0){
        console.log('pari')
        result.innerHTML = num;
    }else if(risultato == 1){
        console.log('dispari')
        risultato = num;
        risultato++;
        
        console.log(risultato)
        result.innerHTML = risultato;
    }else {
        console.log('non è un numero intero')
        result.innerHTML = 'Il tuo non è un numero o non è un numero intero.'
    }

}

btn.addEventListener('click', print);  




// **Snack2**
// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.


let NameList = ["Emanuele", "Lorenzo", "Steve", "Francesco", "Daniel", "Giulia", "Alessia"];
let SurnameList = ["Rossi", "Kmer", "Jobs", "Bezos", "Bianchi", "De Rosa", "Fantoni"];

let listaFalsa = [];
let listaFalsaStamp = document.getElementById('result2');

console.log(NameList);
console.log(SurnameList);

for ( let i = 0; i < 7; i++) {

    let NamesRandom = Math.floor(Math.random() * NameList.length);
    let SurnamesRandom = Math.floor(Math.random() * SurnameList.length);

    let nomeFesta = NameList[NamesRandom];
    let cognomeFesta = SurnameList[SurnamesRandom];

    let invitatoFesta = `${nomeFesta} ${cognomeFesta}`;

    console.log(invitatoFesta);
    
    listaFalsa.push(invitatoFesta);

    console.log(listaFalsa);

}

listaFalsaStamp.innerHTML = listaFalsa;











// **Snack3**
/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.*/

let posizioneDispari = document.getElementById('result3');
let nradom = document.getElementById('nrandom');


const numeriGenerati = [];

for(let i = 1; i <= 20; i++){
    let check = false
    let numeroGenerato = Math.floor(Math.random() * (50 - 1) ) + 1;
    for(let n = 0; n < numeriGenerati.length; n++){
        if(numeroGenerato === numeriGenerati[n]){
            check = true;
        }
    }
    if(!check){
        numeriGenerati.push(numeroGenerato);
    }

}
console.log(numeriGenerati);

nradom.innerHTML = numeriGenerati;

let somma = 0;

for(let i = 0; i < numeriGenerati.length; i++){
    if(i % 2 !==0){
        somma = somma + numeriGenerati[i];
    }
}
console.log(somma);

posizioneDispari.innerHTML = somma;





// **Snack4 (Bonus)**
// Crea due array che hanno un numero di elementi diversi.  
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let lunghezza = document.getElementById('result4');
let grande = document.getElementById('grande');
let piccolo = document.getElementById('piccolo');
console.log(grande)


const arrayGrande = [];


for(let i = 1; i <= 20; i++){
    let check = false
    let numeroGenerato = Math.floor(Math.random() * (20 - 1) ) + 1;
    for(let n = 0; n < arrayGrande.length; n++){
        if(numeroGenerato === arrayGrande[n]){
            check = true;
        }
    }
    if(!check){
        arrayGrande.push(numeroGenerato);
    }

}
console.log(arrayGrande);

let arrayPiccolo=[1, 2, 3];



grande.innerHTML = arrayGrande;
piccolo.innerHTML = arrayPiccolo;


for (let i = arrayPiccolo.length; arrayPiccolo.length < arrayGrande.length; i++){
    arrayPiccolo.push(Math.floor((Math.random()*100)));
}

console.log(arrayPiccolo);
lunghezza.innerHTML = arrayPiccolo;