const express = require('express'),
	  app = express(),
      session = require('express-session'),

      port = process.env.PORT || 8000;
      server = require('http').createServer(),
    
      bodyParser = require('body-parser'),
      cors = require('cors'),
        corsOptions = {
            origin: 'http://localhost:' + port
      },
    
      mongoose = require('mongoose'),
      mongoUri = 'mongodb://user:dataponics@ds011331.mlab.com:11331/dataponics';
	  

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require("./websockets.js");




mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
        console.log('Connected to MongoDB at ' + mongoUri);
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });
