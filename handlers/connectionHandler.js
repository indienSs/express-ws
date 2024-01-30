import { broadcastConnection } from "./broadcastConnection.js";

export function connectionHandler(awss, ws, msg) {
  ws.id = msg.id;
  broadcastConnection(awss, ws, msg);
}
