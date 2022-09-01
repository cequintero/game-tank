const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const messages = [{
    id: 1,
    text: "Hola soy un mensaje",
     author: 'Juan Guerrero Ortega'
}];

app.use(express.static('public'));

app.get('/hello', function(req, res){
    res.status(200).send("Hello World!");
});

io.on('connection', function(socket) {
    console.log('Alguien se ha conectado con Sockets');
    socket.emit('messages', messages);

    socket.on('new-message', function(data) {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

server.listen(8080, function(){
    console.log("Servidor corriendo en http://34.227.163.143:8080");
});