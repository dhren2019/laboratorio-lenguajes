// [SOLUCIÓN]

function subsets1(word) {
  var res = [];
  for (var i = 0; i < word.length - 1; i++) {
    res.push(word.substr(i + 1));
  }
  return res;
}

console.log(subsets1("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Solución al Challenge:
function subsetsChallenge(word) {
  return Array.prototype.map.call(word.substr(1), function (_val, i) {
    return word.substr(i + 1);
  });
}

console.log(subsetsChallenge("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


// Alternativa:
function subsetsChallenge(word) {
  var res = [];
  Array.from(word).forEach((l, i) => {
    if (i !== 0) res.push(word.substr(i));
  });
  return res;
}
