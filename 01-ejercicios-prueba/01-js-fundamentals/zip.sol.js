// [SOLUCIÓN]

function zipObject(keys, values) {
  var obj = {};
  keys.forEach((key, i) => {
    obj[key] = values[i]; // Una línea con reduce
  });
  return obj;
}

console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])) // {spanish: "hola", english: "hi", french: "salut"}

// Solución al Challenge:
function zipObjectChallenge(keys, values) {
  var obj = {};
  values.forEach((value, i) => {
    obj[keys[i]] = values; // Una línea con reduce
  });
  return obj;
}

console.log(zipObjectChallenge(["spanish", "english", "french"], ["hola"])) // {spanish: "hola"}
