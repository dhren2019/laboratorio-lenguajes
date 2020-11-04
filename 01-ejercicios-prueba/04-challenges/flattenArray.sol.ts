// APARTADO A
const flatten = arr => [].concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)));

const sample = [1, [4], [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log(flatten(sample));

// APARTADO B
/**
 * WARNING
 * Esta solución es válida para TS 3.7 y aun asi tiene la limitación
 * de que su recursividad no es capaz de más allá de 5 anidamientos, al
 * menos es lo que parece a simple vista. Comprueba si han corregido esto.
 */

type MultiArray<T> = Array<T | MultiArray<T>>;

const flatten = <T = any>(arr: MultiArray<T>): T[] =>
  ([] as T[]).concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)));

const sample: MultiArray<number> = [1, [4], [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log(flatten(sample));
