// A stream is an abstract interface for working with streaming data in Node.js. 
// Streams can be readable, writable, or both. 
// All streams are instances of EventEmitter.

// process.stdin is a readable stream. We use it to read data from user input.
// process.stdout is a writable stream. It is written to asynchronously, making it non-blocking. console.log and console.info use this stream.
// process.stderr is also a writable stream. It is written to synchronously and, hence, is blocking. console.warn and console.error use this stream.