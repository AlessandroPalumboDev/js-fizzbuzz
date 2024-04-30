'use strict';

// --Creo un ciclo che va avanati finchè i valore dell'elemento è compreso tra 1 e 100 e stampi il risultato in console
// --Aggiungo gli if necessari per fare in modo che per i multipli di 3 stampi “Fizz” e per i multipli di 5 stampi “Buzz”
for (let i = 1; i <= 100; i++) {

    // Se è dividsibile sia per 3 sia per 5 stampa FIZZBUZZ
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz')
    }

    // Se è divisibile per 5 stampa BUZZ
    else if (i % 5 == 0) {
        console.log('Buzz');
    }

    // Se è divisibile per 3 stampa FIZZ
    else if (i % 3 == 0) {
        console.log('Fizz');
    }

    // Per tutti gli altri numeri invece stamap il numero
    else {
        console.log(i);
    }};  

