// 1. *** APLANANDO ARRAYS **********************************************

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




// 2. *** ACCESO EN PROFUNDIDAD *****************************************

// APARTADO A

const deepGet = (obj, ...getters) => {
  const [first, ...rest] = getters;
  return (obj !== undefined && first !== undefined) ? deepGet(obj[first], ...rest) : obj;
};

// APARTADO B

// Versión recursiva
const deepSet = (value, obj, ...getters) => {
  const [first, ...rest] = getters;
  if (first !== undefined) {
    if (rest.length) {
      if (typeof obj[first] !== "object") obj[first] = {};
      return deepSet(value, obj[first], ...rest)
    } else {
      return obj[first] = value;
    }
  }
  return undefined;
};

// Versión con loop
const deepSet = (value, obj, ...getters) => {
  let place = obj;
  for (let i = 0; i < getters.length; i++) {
    const prop = getters[i];
    if (i === getters.length - 1) return place[prop] = value;
    else {
      if (typeof place[prop] !== "object") place[prop] = {};
      place = place[prop];
    }
  }
  return undefined;
}



// 3. *** ÁRBOL *********************************************************

// ALTERNATIVA A. Forma sencilla usando Recursividad.
interface TreeNode<T = any> {
  value: T;
  children?: Array<TreeNode<T>>;
}

const myTree: TreeNode<number> = {
  value: 1,
  children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
};

// ALTERNATIVA B. Distinguiendo entre hojas y nodos.
interface TreeLeaf<T> {
  value: T;
}

interface TreeNode<T> extends TreeLeaf<T> {
  children: Array<TreeNode<T> | TreeLeaf<T>>;
}

type Tree<T> = TreeLeaf<T> | TreeNode<T>;

const myTree: Tree<number> = {
  value: 1,
  children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
};

// ALTERNATIVA C. Forma compacta con recursividad pero evitando
// las referencias cirulares en los alias. NOTA: A partir
// de TS 3.7 (en beta todavía) si se puede aplicar
// recursividad en los alias.
// El inconveniente de esta forma es que solo los nodos
// finales contienen valor.
interface TreeNodeArray<T> extends Array<TreeNode<T>> { }
type TreeNode<T> = T | TreeNodeArray<T>;

const myTree: TreeNode<string> = [["hello"], [["world"], "!"]];

// ALTERNATIVA D. Otra alternativa usando tuplas. Todos los nodos
// tienen valor.
interface TreeNodeArray<T> extends Array<TreeNode<T>> { }
type TreeNode<T> = [T] | [T, TreeNodeArray<T>];

const myTree: TreeNode<string> = ["root", [["L1NodeA", [["L2NodeA"]]], ["L1NodeB", [["L2NodeB"], ["L2NodeC"]]]]];




// 4. *** TRAZAS POR CONSOLA ********************************************

/**
 * La implementacion original dispara cada función de trigger sin hacer
 * espera activa (await), por lo que las promesas se inician en paralelo.
 * La idea es esperar cada vez que disparamos un trigger.
 */

const run = async triggers => {
  for (const trigger of triggers) {
    await trigger();
  }
  console.log("first");
};



// 5. *** MEMOIZATION ***************************************************

// NOTA: El operador ?? para discriminar valores null o undefined pertenece
// a TS 3.7 en adelante.

// APARTADO A
type Func<T> = () => T;
const memoize = <T>(f: Func<T>): Func<T> => {
  let cache: T;
  return () => cache ?? (cache = f(), cache);
};

// APARTADO B
const memoize = <T>(f: Func<T>): Func<T> => () => f["cache"] ?? (f["cache"] = f(), f["cache"]);

// APARTADO C

// Versión con Stringify
const memoize = <F extends (...args: any[]) => any>(f: F) => {
  let cache: Record<string, ReturnType<F>> = {};

  return (...args: Parameters<F>): ReturnType<F> => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key] as ReturnType<F>;
    }
    const result = f.apply(null, args)
    cache[key] = result;
    return cache[key];

  };
}

// Versión haciendo uso del deepGet y deepSet anteriores
const memoize = <F extends (...args: any[]) => any>(f: F) => {
  let cache: Record<string, ReturnType<F>> = {};

  return (...args: Parameters<F>): ReturnType<F> => {
    const cachedResult = deepGet(cache, ...args);
    return cachedResult !== undefined
      ? cachedResult
      : deepSet(f(...args), cache, ...args);
  };
};
