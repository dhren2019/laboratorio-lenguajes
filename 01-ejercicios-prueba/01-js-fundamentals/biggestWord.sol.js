// [SOLUCIÓN]

// Solución usando Array.prototype.forEach
function biggestWord1(phrase) {
  var longest = "";
  phrase.split(" ").forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

console.log(biggestWord1("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord1("Ejercicios básicos de JavaScript")); // "Ejercicios"

// Solución utilizando Array.prototype.reduce
function biggestWord2(phrase) {
  return phrase.split(" ").reduce(function (acc, word) {
    return word.length > acc.length ? word : acc;
  }, "");
}

console.log(biggestWord2("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord2("Ejercicios básicos de JavaScript")); // "Ejercicios"
