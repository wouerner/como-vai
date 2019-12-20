var express = require('express');

var socket = require('socket.io');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// app.get('/', function(req, res) {
//     console.log('/');
// });
require('./controllers/authController')(app);

var server = app.listen(3000, function(){
    console.log('server init port 4000');
} );


// var io = socket(server);

// io.on('connection', function(socket){
//     console.log('connection', socket.id)
//     socket.on('teste', function(data){
//         console.log(data);
//         data.id = socket.id;
//         io.sockets.emit('teste', data)
//     })
// })
