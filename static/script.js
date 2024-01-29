const button = document.getElementById("wsbtn");
const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  console.log("client ws connected");
};
