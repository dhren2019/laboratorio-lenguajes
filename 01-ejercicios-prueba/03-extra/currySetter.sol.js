// [SOLUCIÓN]

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };

const set = (obj, property, value) => ({ ...obj, [property]: value });

const updatedJulia = set(julia, 'age', 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false


// [OPCIONAL]

const set = property => (obj, value) => ({ ...obj, [property]: value });

const setName = set('name');
const setSurName = set('surname');
const setAge = set('age');

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
console.log(setName(julia, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 19 }
