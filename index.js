import express from "express";
import cors from "cors";

import { getcomprar, getcomprarById, getHistory, makePayment } from "./controller.js";

const server = express();
const PORT = 8080;

server.use(cors());
server.use(express.json());


server.get("/comprar", getcomprar); 
server.get("/comprar/:id", getcomprarById);

server.get("/history", getHistory);


server.post("/payment", makePayment);

server.listen(PORT, () => console.log(`🚀 SERVIDOR RODANDO NA PORTA ${PORT}`));