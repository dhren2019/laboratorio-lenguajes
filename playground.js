// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([ first, ...others]) => first; // Implementation here.
console.log(head.first)
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([first, ...others]) => others; // Implementation here.

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {
    [element, ...others] = arr.reverse();
    return others.reverse();
}; 
console.log(init)

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = () => {}; // Implementation here.

