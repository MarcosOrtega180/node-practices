// console.count() is a handy method.
//
//   Take this code:


const x = 1
const y = 2
const z = 3

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
)
console.count(
  'The  value of y is ' + y + 'and has been checked .. how many times?'
)

// What happens is that console.count() will count the number of times a string is printed, and print the count next to it:
//
//   You can just count apples and oranges:

const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

// continue in reset counting...
