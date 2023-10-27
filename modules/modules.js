// Modules
// modules in breaking your code into pieces in seperate files  which can contain functions , objects etc and are imported everywhere in your code to be used .
// every file is  module (by default)
// modules - is  encapsulated code (only share minimum) meaning we are only sharing the part of the code we want .

const names = require('./4-names');
const sayHi = require('./5-utils');
const iteratables = require('./6-others');
require('./7-function');


sayHi(names.john);
console.log(iteratables.person.name);

iteratables.items.forEach((item) => {
    console.log(item);
})


