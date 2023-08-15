console.log("This is the first message");

// The "beforeExit" event is fired when the event loop is empty, which means that
// Node.js has done all its work and is about to exit
process.on("beforeExit", (code: number): void => {
    console.log("Process beforeExit event with code:", code);
});

// The exit event is fired when process.exit() is called, or the event loop
// has no additional work to perform. The exit event executes synchronously, 
// and asynchronous calls may not return properly. This is why the console.log() 
// on line 14 does not work
process.on("exit", (code: number): void => {
    setTimeout((): void => { console.log("This will not work")}, 0);
    console.log("Process exit event with code:", code);
});

console.log("This is the second message");

// explicitly calling process.exit() prevents the beforeExit event from being fired
// process.exit();