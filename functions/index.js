// Functions

function calculateTotal(price, quantity = 1) {
  return price * quantity;
}

function createUser(name, age) {
  return {
    name,
    age,
    role: "learner"
  };
}

const total = calculateTotal(250, 3);
const user = createUser("MD JIHAD", 20);

console.log(total);
console.log(user);

const add = (first, second) => first + second;
console.log(add(10, 20));
