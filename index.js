import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import expressWs from "express-ws";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
expressWs(app);

app.ws("/", (ws, req) => {
  console.log("WS connected");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
