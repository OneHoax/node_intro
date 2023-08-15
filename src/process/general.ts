console.log("Process args:", process.argv);

console.log("Process cwd:", process.cwd());
console.log("Going 1 dir up");
process.chdir("..");
console.log("Process cwd:", process.cwd());