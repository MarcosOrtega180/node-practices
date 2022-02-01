/* type node app6.js name=Marcos lastName=Ortega in the command line to execute the program.
* That was the way you can pas any kind of data to a node program. Arguments can be standalone or
* have a key and a value.
* E.g.:
* 	node app.js Marcos
* 	node app.js name=Marcos
* This changes how you will retrieve this value in the node.js code.
* The way you retrive it is using the process object built into Node.js.
* It exposes an argv property, which is a array that contains all the command line invocation arguments.
* The first element is the full path of the node command.
* The second element is the full path of the file being executed.
* All the additional arguments are present form third position going forward.
* You can iterate over all arguments (includin the node path and the file path) using a loop:
* */
process.argv.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});
console.log('----separator----')

/* You can get only the additional arguments by creating a new array that excludes the first 2 params:*/
const args = process.argv.slice(2);
args.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});
console.log('----separator----')

/* In this case: node app.js name=joe args[0] is name=joe, and you need to parse it. The best way to do
* so is by using the minimist library, which helps dealing with arguments: (don't forget to
* npm install minimist. This time you need to use double dashes before each argument name like this:
* node app6.js --name=Marcos --lastName=Ortega*/
const args2 = require('minimist')(process.argv.slice(2))
args2['name'] //joe

console.log(args2['name'])