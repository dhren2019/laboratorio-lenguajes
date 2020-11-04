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
