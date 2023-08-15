import net from "node:net";
import readline from "node:readline";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});

const server: net.Server = net.createServer();
const port: number = 3500;

server.on("connection", (socket: net.Socket): void => {
    console.log("Client connected from", socket.remoteAddress, socket.remotePort);

    socket.write("Hello from the server");

    socket.on("data", (data: Buffer): void => {
        console.log("Msg from client:", data.toString());
    });

    // rl.prompt();
    rl.on("line", (line: string): void => {
        socket.write(line);
        rl.prompt();
    });

    socket.on("close", (err: boolean): void => {
        if (err)
            console.log("Client disconnected due to error");
        else 
            console.log("Client disconnected");
    });
});

server.on("listening", (): void => {
    console.log("Server is listening on port:", port);
});

server.listen(port);