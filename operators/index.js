// Operators

const price = 500;
const quantity = 2;
const total = price * quantity;
const discount = 100;
const finalPrice = total - discount;
const hasEnoughMoney = finalPrice <= 1000;

console.log("Total:", total);
console.log("Final price:", finalPrice);
console.log("Can afford:", hasEnoughMoney);
