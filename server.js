var  express = require('express'),
	 app = express(),
	 bodyParser = require('body-parser'),
	 mongoose = require('mongoose'),
	 session = require('express-session'),
	 cors = require('cors'),
	 port = 8080,
	 corsOptions = {
        origin: 'http://localhost:' + port
     },
     mongoUri = 'mongodb://localhost:27017/datagrow';

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
        console.log('Connected to MongoDB at ' + mongoUri);
   });



app.listen(port, function() {
	console.log('Listening on ' + port);
});