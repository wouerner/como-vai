var express = require('express');

var socket = require('socket.io');

var bodyParser = require('body-parser');

var app = express();
var server = app.listen(4000, function(){
    console.log('server init port 4000');
} );

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// app.get('/', function(req, res) {
//     console.log('/');
// });


var io = socket(server);

io.on('connection', function(socket){
    console.log('connection', socket.id)
    socket.on('teste', function(data){
        console.log(data);
        data.id = socket.id;
        io.sockets.emit('teste', data)
    })
})
