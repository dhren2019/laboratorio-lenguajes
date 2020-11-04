// [SOLUCIÓN]

// A.
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
  for (var key in a) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key) || b[key] !== a[key])
      return false;
  }
  return true;
}

console.log(isEqual(user, clonedUser)); // true

// B.
var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  for (var key in a) {
    if (
      !a.hasOwnProperty(key) ||
      !b.hasOwnProperty(key) ||
      typeof a[key] !== typeof b[key] ||
      (typeof a[key] === "object" && !isDeepEqual(a[key], b[key])) ||
      (typeof a[key] !== "object" && a[key] !== b[key])
    )
      return false;
  }
  return true;
}

console.log(isDeepEqual(user, clonedUser)); // true
