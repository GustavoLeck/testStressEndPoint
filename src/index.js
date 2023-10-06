import express from "express";
import Teste from "./routes/testeRoute.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const port = 3660;

server.listen(port, async () => {
    console.log(`Server is running`);
    server.use("/api", Teste);
})
