const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

buf2.fill(1);
console.log(buf2);

const buf3 = Buffer.alloc(5, 15);
console.log(buf3);

buf3.write("abcd");
console.log(buf3);
console.log(buf3.toString());

const buf4 = Buffer.from([255, 257]);
console.log("this is buf4", buf4);

const buf5 = Buffer.from("Hello world");
console.log(buf5);
console.log(buf5.toString());