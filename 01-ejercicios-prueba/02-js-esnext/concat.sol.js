// [SOLUCIÓN]

// A.
const concat = (a, b) => [...a, ...b];


// B.
const concatMulti = (...arrays) => {
  let result = [];
  for(let a of arrays) {
    result = [...result, ...a];
  }
  return result;
}

// B. Versión con reduce.
const concatMultiWithReduce = (...arrays) => arrays.reduce((result, a) => [...result, ...a], []);

// B. Versión con ES proposal "flatten".
const concatMultiWithFlatten = (...arrays) => arrays.flatten();
