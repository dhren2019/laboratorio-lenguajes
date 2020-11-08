
// Implementa una función clone que, a partir de un objeto de entrada source devuelva 
// un nuevo objeto con las propiedades de source 
function clone(source) {
    
    const cloneSource = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            
        }
    }
}





// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso 
// de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
// const a = {name: "Maria", surname: "Ibañez", country: "SPA"}; const b = {name: "Luisa", age: 31, married: true}; 
// el resultado de mezclar a sobre b sería:
// merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}