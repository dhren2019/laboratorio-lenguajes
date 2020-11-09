// Array musicos
const musicos = ['Michael Jackson', 'Lost Frecuencies', 'Linkin Park', 'Frank Sinatra'];
// Imprementa una funcion concat tal que, dados 2 arrays como entrada,
// devuelva la concatenacion de ambos.Utiliza rest / spread

const concat       = (array, secondArray) => [...array.concat(secondArray)];

const concatVarios = (...args)   => args.reduce((acc, val) => [...acc, ...val]);

console.log(concat(names, cities));
console.log(concatVarios(names, cities, names, cities));