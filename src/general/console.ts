// -------------------- Errors --------------------
console.log("hello");
console.warn("this is a warning");
console.error("this is an error");
console.error(new Error("this is another error"));

// -------------------- Trace --------------------
function myFunc(): void {
    console.trace("let's look at the trace");
}

function myOtherFunc(): void {
    myFunc();
}

myOtherFunc();

// -------------------- Others --------------------
// starts timer: string passed as arg is a lable that needs to be
// exactly the same for "timeEnd" for the timer to work
console.time("for loop time");
for (let i = 0; i < 100; i++) { };
// ends timer
console.timeEnd("for loop time");

// outputs data in a table-like format
console.table([{ "Fruit": "Apple", "Quantity": 5 }, { "Fruit": "Mango", "Quantity": 7 }]);

// -------------------- Console Class --------------------
import fs from "node:fs";
import { Console } from "node:console";

// const output = fs.createWriteStream("./resources/stdout.log");
// const errorOutput = fs.createWriteStream("./resources/stderr.log");
const output = fs.createWriteStream("../../resources/stdout.log");
const errorOutput = fs.createWriteStream("../../resources/stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });

logger.log("This is some output");
logger.error("This is some error");