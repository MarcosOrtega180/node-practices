// #Accept input from the command  line in Node.js

/**
 * How to make a Node.js CLI program interactive?
 *
 * Node.js since version 7 provides the readline module to perform exactly this: get input from ta readable stream
 * such as the process.stdin stream, wich during the execution of a Node.js program is the terminal input, one line at
 * a time.
 */

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
//
// readline.question(`What's your name? `, (name) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });


/**
 * This piece of code asks the user's name, and once the text is entered and the user presses enter, we send a greetin.
 *
 * The question() method shows the first parameter (a question) and waits for the user input. It calls the callback
 * function once enter is pressed.
 *
 * In this callback function, we close the readline interface.
 *
 * The simplest way is to use the readline-sync package which is very similar in terms of the API and handles this out
 * of the box.
 *
 * A more complete and abstract solution is provided by the Inquirer.js package
 * [https://github.com/SBoudrias/Inquirer.js].
 *
 * You can install it using npm install inquirer, and then you can replicate the above code like this:
 */

const inquirer = require('inquirer');

const question = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  },
  {
    type: 'number',
    name: 'age',
    message: "What's your age?"
  }
];

inquirer.prompt(question).then(answers => {
  console.log(`Hi ${answers.name} ${answers.age}`);
})

/**
 * Inquirer.js lets you do many things like asking multiple choices, having radio buttons, confirmations, and more.
 *
 * It's knowing all the alternatives, especially the built-in ones provided by Node.js, but if you plan to take CLI
 * input to the next level, Inquirer.js is an optional choice.
 */
