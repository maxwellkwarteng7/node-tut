const { readFile, writeFile } = require('fs'); 

readFile('./modules/content/result.txt', 'utf-8', (err , success) => {
    if (err) {
        console.log(err);
        return;
    }
   console.log(success);
})