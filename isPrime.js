//given a number, return if that number is a prime or not
export const isPrime = n => {
  if (n === 1) return true;
  else {
    //no need to check further than the rounded down square root of n as you would determine prime or not by then
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
  }
  return n > 1;
};

//tests
console.log('30 a prime? : ' + isPrime(30));
console.log('17 a prime? : ' + isPrime(17));
console.log('25 a prime? : ' + isPrime(25));
console.log('13337 a prime? : ' + isPrime(13337));
