const button = document.getElementById("wsbtn");
const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  const connectionObject = { method: "connection", id: 1, text: "Ws connection method message from client" };
  socket.send(JSON.stringify(connectionObject));
};

socket.onmessage = event => {
  console.log("Received message from socket: ", event.data);
};

button.onclick = () => {
  const connectionObject = { method: "message", id: 1 };
  socket.send(JSON.stringify(connectionObject));
};
