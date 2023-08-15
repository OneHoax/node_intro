process.on("uncaughtException", (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    console.error("This casued a problem:", origin);
    console.error(err.stack);
});

setTimeout((): void => {
    console.log("This will also work");
}, 1000);

console.log("This will work");

// Can't even call it bc of TS
// thisDoesNotExist();

console.log("This will not work");