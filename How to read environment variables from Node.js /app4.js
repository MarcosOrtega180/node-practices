/*The process core module of Node.js provides the env property which hosts all the environment variables that were s
et at the moment the process was started.

The below code runs app.js and set USER_ID and USER_KEY.*/
//USER_ID=239482 USER_KEY=foobar node app.js

process.env.USER_ID // "239482"
process.env.USER_KEY // 'foobar'

console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);


