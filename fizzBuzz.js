//fizz buzz solution of the first 100 numbers
const fizzBuzz = num => {
  for (let x = 1; x <= num; x++)
    console.log((x % 3 ? '' : 'Fizz') + (x % 5 ? '' : 'Buzz') || x);
};

fizzBuzz(100);
