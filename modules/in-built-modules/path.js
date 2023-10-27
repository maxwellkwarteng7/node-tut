// mostly used for paths and it has many functions so you head to the documentation just you to do something with a particular function . Thank you .

const path = require('path'); 

console.log(path.sep);  // output \ for windows and / for mac .

// the resolve function resolve the names of the path passed into an absolute path for you
const absolute = path.resolve(__dirname, 'in-built-modules', 'os.js'); 

console.log(absolute); //output  C:\Users\schneider001\Desktop\Node\modules\in-built-modules\in-built-modules\os.js