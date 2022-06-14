// First method.
// const car = require('./expose functionality using exports');
//
// console.log('imported car ', car);


// Second method

// const items = require('./car');
//
// const { car } = items;

//
// const { car } = require('./car');


const tesla = require('./car');
const ford = require('./car').car;

console.log(tesla, ford);
