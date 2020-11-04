// [SOLUCIÓN]

// B.

var a = 1;
let b = 2;

{
  let b = 3;
  try {
      console.log(a, b);
  } catch(error) {}
  console.log(a, b);
}

console.log(a, b);

(() => {
  var a = 5;
  console.log(a);
  let b = 6;
  console.log(a, b);
})();

console.log(a, b);
