// [SOLUCIÓN]


// A.

const head = ([first] = []) => first;


// B.

const tail = ([, ...rest] = []) => rest;


// C.

const init = (array) => array.slice(0, -1);


// D.

const last = (array) => array[array.length - 1];
