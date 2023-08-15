import fs, { Stats } from "node:fs";

type nodeError = NodeJS.ErrnoException | null;
const fileName1: string = "./resources/test.txt";
const fileName2: string = "./resources/test2.txt";

// #################### Reading from file ####################
// asynchronous 
fs.readFile(fileName1, "utf-8", (err: nodeError, data: string): void => {
    if (err) 
        console.log(err);
    else
        console.log("In asynchronous func - ", data);
});

console.log("hello 1");

// synchronous
try {
    const data: string = fs.readFileSync(fileName1, "utf-8");
    console.log("In synchronous func - ", data);
} catch (err) {
    console.log(err);
}

console.log("hello 2");


// #################### Writing to file ####################

const content: string = "this is what will be written to the file";
const content2: string = "this is the 2n content to be written";

// asynchronous
fs.writeFile(fileName1, content, (err): void => {
    if (err) 
        console.error(err);
    else 
        console.log("file written");
});

fs.readFile(fileName1, "utf-8", (err: nodeError, data: string): void => {
    if (err) 
        console.log(err);
    else
        console.log("In asynchronous func - ", data);
});

// synchronous
try {
    fs.writeFileSync(fileName1, content2);
    console.log("file written synchronous");
} catch (err) {
    console.error(err);
}

// #################### File stats ####################
fs.stat(fileName1, (err: nodeError, data: Stats): void => {
    if (err)
        console.error(err);
    else
        console.log(data);
});

// #################### File descriptors ####################
fs.stat(fileName2, (err: nodeError, stats: Stats): void => {
    if (err) {
        console.error(err);
        return;
    }

    fs.open(fileName2, "r", (err: nodeError, fd: number): void => {
        if (err) {
            console.error(err);
            return;
        }
        const buffer: Buffer = Buffer.alloc(stats.size);

        fs.read(fd, buffer, 0, buffer.length, null, (err: nodeError, bytesRead: number, buffer: Buffer) => {
            if (err) {
                console.error(err);
                return;
            }

            const data: string = buffer.toString("utf-8", 0, buffer.length);

            console.log(bytesRead, data);

            fs.close(fd, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
});