'use strict';

// Dichiaro la variabile della lista
const lista = document.querySelector('ul.list');

// --Creo un ciclo che va avanati finchè i valore dell'elemento è compreso tra 1 e 100 e stampi il risultato in console
// --Aggiungo gli if necessari per fare in modo che per i multipli di 3 stampi “Fizz” e per i multipli di 5 stampi “Buzz”
for (let i = 1; i <= 100; i++) {

    // Creo variabile per la creazione del list-item
    const li = document.createElement('li');

    // Se è dividsibile sia per 3 sia per 5 stampa FIZZBUZZ e aggiungi classe di stile specifica
    if (i % 5 === 0 && i % 3 == 0) {
        console.log('FizzBuzz')
        lista.append(li);
        li.append('FizzBuzz');
        li.classList.add("bg-fizzbuzz");
    }

    // Se è divisibile per 5 stampa BUZZ e aggiungi classe di stile specifica
    else if (i % 5 === 0) {
        console.log('Buzz');
        lista.append(li);
        li.append('Buzz');
        li.classList.add("bg-buzz");
    }

    // Se è divisibile per 3 stampa FIZZ e aggiungi classe di stile specifica 
    else if (i % 3 === 0) {
        console.log('Fizz');
        lista.append(li);
        li.append('Fizz');
        li.classList.add("bg-fizz");
    }

    // Per tutti gli altri numeri invece stampa il numero senza aggiungere nessuna classe di stile in più
    else {
        console.log(i);
        lista.append(li);
        li.append(i);
    }
};

