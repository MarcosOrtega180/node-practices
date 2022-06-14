/**
 * Node.js has a built-in module system.
 *
 * A Node.js file can import functionality exposed by other Node.js files.
 *
 * When you want to import something you use
 *
 * const library = require('./library');
 *
 * to import the functionality exposed in the library.js file that resides in the current file folder
 *
 * In this file, functionality must be exposed before it can be imported by other files.
 *
 * Any other object or variable defined in the file by default is private and not exposed to the outer world.
 *
 * When you assign an object or a function as a new exports property, that is the thing tha is being exposed, and as
 * such, it can be imported in other parts of your app, or in other apps as well.
 *
 * You can do so in 2 ways.
 *
 * The first is to assign an object to module.exports, which is an object provided out of the box by the module system,
 * and this will make your file exports just that object.
 */

// const car = {
//   brand: 'Ford',
//   model: 'Fiesta',
// }
//
// module.exports = car;
// The variable car has been imported in the file index.js

/**
 * The second way is to add the exported object as a property of exports. This way allows you to export multiple
 * objects, functions or data:
 */

// const car = {
//   brand: 'Ford',
//   model: 'Fiesta'
// }
//
//
// exports.car = car;

// or directly

// exports.car = {
//   brand: 'Ford',
//   model: 'Fiesta',
// };
/**
 * And in the other file, you'll use it by referencing a prperty of your import:
 *
 * const items = require('./car');
 *
 * const { car } = items;
 *
 * Or you can use a destructuring assignment:
 *
 * const { car } = require('./car');
 *
 * What's the difference between module.exports and exports?
 *
 * The first exposes the object it points to. The latter exposes the properties of the object it points to.
 *
 * require will always return the object that module.exports poits to
 */

// car.js
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = {
  brand: 'Tesla',
  model: 'Model S',
};

// app.js (the other file)
// const tesla = require('./car');
// const ford = require('./car').car;
//
// console.log(tesla, ford);

// This will print { brand: 'Tesla', model: 'Model S' } undefined since the require function's return value has been updated to the object that module.exports points to, so the property that exports added can't be accessed.
