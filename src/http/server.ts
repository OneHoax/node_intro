import http from "node:http";

const hostName: string = "0.0.0.0";
const port: number = 3500;

type Server = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
type Request = http.IncomingMessage;
type Response = http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
};

const server: Server = http.createServer((req: Request, res: Response): void => {
    console.log("Request header:", req.headers);

    const statusCode: number = 200;
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/html");
    res.end(`Status code is: ${statusCode} Hello World`);
});

server.listen(port, hostName, (): void => {
    console.log(`Server running at http://${hostName}:${port}/`);
});