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

// What happens is that console.count() will count the number of times a string is printed, and print the count
// next to it:
//   You can just count apples and oranges:

const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

/* # Reset counting
* The console.contReset() method resets counter used with console.count()
* We will use the apples and organe example to demonstrate this.
* */
console.countReset('orange')
oranges.forEach(fruit => {
  console.count(fruit);
});

/* Notice how the call to console.countReset('orange') resets the value counter to zero*/

// # Print the stack treace

/**
 *  There might be cases where it's useful to print the call stack trace of a function, maybe to answer the
 *  question of how did you reach that part of the code?
 *  You can do so using console.trace()
 *  */

const function2 = () => console.trace;
const function1 = () => function2();

function1();

/**
 * this will print the stack trace. This is what's printed if we try this in the Node.js REPL
 */

// # Calculate the time spent
/**
 * You can easily calculate how much time a function takes to run, using time() and timeEnd()
 */
const doSomething = () => console.log('test');
const measureDoingSomethin = () => {
  console.time('doSomething()');
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
}
measureDoingSomethin();
/*
It can be a very interesting tool for testing my code, specially when I need to measure the latency of a service
in angular.
 */

// # stdout and stderr
/**
 * As we saw, console.log is great for printing messages in the Console. This is what's called the standard
 * output, or stdout.
 *
 * console.error prints to the stderr stream.
 *
 * It will not appear in the console, but it will appear in the error log.
 */

// Color the output
/**
 * You can color the output of your text in the console by using escape sequences. An scape sequence
 * is a set of characters that identifies a color.
 */
console.log('\x1b[33m%s\x1b[0m', 'hi!');
/**
 * You can try that in the Node.js REPL, and it will print hi! in yellow.
 *
 * However, this is the low-level way to do this. The simplest way to go about coloring the console otuput is
 * by using a labrary. Chalk is suck a library, and in addition to coloring it also helps with other styling
 * facilities, like making text bold, italic or underlined.
 *
 * You install it with npm install chalk@4, then you can use it:
 */

const chalk = require('chalk');
console.log(chalk.red('hi!'));

/**
 * Using chalk.yellow is much more convenient than trying to remember the escape codes, and the code is much more
 * readable.
 *
 * Check the project link posted above for more usage examples.
 */

// # Create a progres bar

/**
 * Progress [https://www.npmjs.com/package/progress] is and awesome package to create a progres bar in the
 * console. Install using npm install progress
 * This snippet creates a 10-step progress bar, every 100ms one step is completed. When the bar completes
 * we clear the interval.
 */
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total: 100});
const timer = setInterval(() => {
  bar.tick();
  if(bar.complete) {
    clearInterval(timer);
  }
}, 100);
