// APARTADO A

const deepGet = (obj, ...getters) => {
  const [first, ...rest] = getters;
  return (obj !== undefined && first !== undefined) ? deepGet(obj[first], ...rest) : obj;
};

// APARTADO B

// Versión recursiva
const deepSet = (value, obj, ...setters) => {
  const [first, ...rest] = setters;
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
const deepSet = (value, obj, ...setters) => {
  let place = obj;
  for (let i = 0; i < setters.length; i++) {
    const prop = setters[i];
    if (i === setters.length - 1) return place[prop] = value;
    else {
      if (typeof place[prop] !== "object") place[prop] = {};
      place = place[prop];
    }
  }
  return undefined;
}
