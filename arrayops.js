
// Array musicos
const musicos = ['Michael Jackson', 'Lost Frecuencies', 'Linkin Park', 'Frank Sinatra'];
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([ first, ...others]) => first; 
console.log(head(musicos))
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([first, ...others]) => others; 
console.log(tail(musicos))

// Implementa una función init (inmutable), tal que, 
// dado un array como entrada devuelva todos los elementos menos el último.
//  Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {
    [element, ...others] = arr.reverse();
    return others.reverse();
}; 

// Last
// Implementa una función last (inmutable),
//  tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => {
    [element, ...others] = arr.reverse();
    return element;
}; 


// Imprementa una funcion concat tal que, dados 2 arrays como entrada,
// devuelva la concatenacion de ambos.Utiliza rest / spread

const concat       = (array, secondArray) => [...array.concat(secondArray)];

const concatVarios = (...args)   => args.reduce((acc, val) => [...acc, ...val]);

console.log(concat(names, cities));
console.log(concatVarios(names, cities, names, cities));