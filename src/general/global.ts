// In a browser, the top-level scope is the global scope, whereas, 
// in Node.js, the top-level scope is not the global scope; 
// it is local to each module.
// A var defined in a browser will be global and accessible everywhere. 
// A var defined in a Node.js module will be local to that module alone. 
console.log(global);