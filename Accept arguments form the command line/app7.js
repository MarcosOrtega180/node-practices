/* If you have one argument without an index name, like this: node app.js joe you can acces it by
* using*/

const args = process.argv.slice(2);
console.log(args[0]);


