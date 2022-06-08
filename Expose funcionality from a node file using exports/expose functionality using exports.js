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
 * and this will make your file exports jus that object.
 */

const car = {
  brand: 'Ford',
  model: 'Fiesta',
}

module.exports = car;
// The variable car has been imported in the file index.js


