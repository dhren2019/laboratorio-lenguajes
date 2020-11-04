// [SOLUCIÓN]

function isPrime(num) {
  if (num <= 1) return false;
  
  for(var i = 2, prime = true; i < num && prime; i++) {
    prime = num % i !== 0;
  }
  return prime;
} 

function showPrimes(from, to) {
  for(var i = from; i <= to; i++) {
    console.log(i.toString() + (isPrime(i) ? " is PRIME!": " is not a prime"));
  }
}

showPrimes(1, 100);


// [MEJORA]

function isPrimeFaster(num) {
  if (num === 0 || num === 1) return false;

  for(var i = 2, prime = true, root = Math.sqrt(num); i <= root && prime; i++) {
    prime = num % i !== 0;
  }
  return prime;
}
