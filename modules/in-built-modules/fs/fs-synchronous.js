//  The file module
// using it synchronously and asynchronously

// first of all let's do synchronously
// which is halting all program  execution until our file is done reading or writing . and mostly there is sync added to the end of the read file or write file

const { readFileSync , writeFileSync } = require('fs'); //requiring specific functions from th fs module 
const fs = require('fs'); //requiring all functions of the fs 

//reading and writing from and to the .txt files created

const first = readFileSync( './modules/content/first.txt', 'utf-8');
const second = readFileSync('./modules/content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./modules/content/result.txt', "Hey this is the result of both of them", { flag: 'a' });
// The {flag: 'a'} is append to  the text which is already in the file we want to write to  . 
//There are many more flags and you can check them out in the docs . 
 