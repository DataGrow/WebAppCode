var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: server });


wss.on('connection', function connection(ws) {
  
  ws.send('Connected to WebSocket');

  ws.on('message', function incoming(message) {
    ws.send(message);
  });
    
});