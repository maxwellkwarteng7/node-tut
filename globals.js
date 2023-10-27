// globals in node js
//these are functions or  variables that can be used everywhere in our code .
// __dirname - path to current directory
//__filename - file name
// require - function to use modules
// module - info about current (file)
//process - info about env where the program is being executed !very important


console.log(process); //You can console log to see some small information about it .

// a simple callback function
// we have the setTimeOut and setInterval

setTimeout(() => {
    console.log("Hi this is good ");
}, 4000);  // set time out means the code inside the settimeout function should run after 4secs of execution
//and set interval means the code should run after  every  specified  interval time .

