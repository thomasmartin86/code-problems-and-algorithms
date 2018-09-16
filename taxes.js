//calculate taxes based on amount and taxrate as percentage
const taxes = (amount, taxPercent) => {
  console.log(`Amount:$${amount} Tax %${taxPercent}`);
  return [amount * (taxPercent / 100)];
};

//tests
console.log(taxes(150, 20));
