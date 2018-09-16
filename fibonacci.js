//returns the first n fibonacci numbers starting with 1, 1
const fibonacci = n => {
  //prepopulate with first two digits
  let fib = [1, 1];
  //only go until <- n-2 since we started with 2 values in the array
  for (let x = 2; x < n; x++) {
    fib.push(fib[x - 2] + fib[x - 1]);
  }
  return fib;
};

console.log(fibonacci(15));
