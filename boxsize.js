/*Write a function that takes three measurements in 
inches as input and returns true if the volume is over 1 us fluid gallon
1 us liquid gallon = 231 cubic inches

can box hold a gallon
*/

const boxSize = (x, y, z) => {
  console.log(
    `Result : ${x * y * z} cubic inches = ${(x * y * z) / 231} us fluid gallons`
  );
  return x * y * z >= 231;
};

console.log(boxSize(5, 4, 6));
console.log(boxSize(3, 3, 3));
console.log(boxSize(20, 3, 10));
