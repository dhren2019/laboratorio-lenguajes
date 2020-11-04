// [SOLUCIÓN]

const fib = (n) => {
  let current = 1;
  let last = 0;

  if ( n < 0 ) return NaN;
  if ( n <= 1 ) return n;

  for ( let i = 1; i < n; i++ ) {
      [current, last] = [current + last, current];
  }

  return current;
}
