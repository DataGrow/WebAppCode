const express = require('express'),
	  app = express(),
    session = require('express-session'),

    port = process.env.PORT || 8000;
    server = require('http').createServer(),
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ server: server }),
		bodyParser = require('body-parser'),
		cors = require('cors'),
    corsOptions = {
        origin: 'http://localhost:' + port
    },
    mongoose = require('mongoose'),
    mongoUri = 'mongodb://user:dataponics@ds011331.mlab.com:11331/user';
	  

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
        console.log('Connected to MongoDB at ' + mongoUri);
});

wss.on('connection', function connection(ws) {
  
  ws.send('Connected to WebSocket');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
    
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });




