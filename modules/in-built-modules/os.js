//we have  os , fs , http , path and  many more
//so actually each inbuilt module has several functions and the best place to know them is through the docs .
// workign a bit with the os
//os interacts with the operating system .
const { log } = require('console');
const os = require('os');

// let's get some information about the current user which is myself 
const user = os.userInfo();
console.log(user);

//getting the uptime of the system (how long the computer has been working or alive in seconds)

console.log(`The system uptime is ${os.uptime}`);

// converting the system default uptime seconds into hours 
// so with the uptime function inside the os module it takes 100sec to be 1 minute  
const minutes = os.uptime / 100;
const hour = os.uptime / (100 * 100);  
console.log(`The minutes is ${minutes} and horus is ${hour}`); 

// getting a bunch of info about our current operating system

const currentOs = {
    name: os.type(), 
    release: os.release(),
    totalMemory: os.totalmem(), 
    freeMemory : os.freemem(),
    
}

console.log(currentOs);