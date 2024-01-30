export function broadcastConnection(awss, ws, msg) {
  awss.clients.forEach(client => {
    if (client.id === msg.id) {
      client.send(`User connected. Id: ${msg.id}`);
    }
  });
}
