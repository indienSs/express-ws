import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import expressWs from "express-ws";
import { connectionHandler } from "./handlers/connectionHandler.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
const awss = expressWs(app).getWss();

app.ws("/", (ws, req) => {
  try {
    console.log("Connected WS");
    ws.send("WS connected, client message");
    ws.on("message", msg => {
      msg = JSON.parse(msg); //JSON с произвольными данными с клиента
      switch (msg.method) {
        case "connection":
          connectionHandler(awss, ws, msg);
          break;
        case "message":
          break;
      }
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
