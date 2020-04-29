var app = require('express')();
var path = require('path');
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/lobby.html');
});

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}


var players = 0;
var ids = [];
var counter = 0;

io.on('connection', (socket) => {
    players += 1;

    if (players == 1) {
        ids.push(socket.id)
        io.emit('wait', 'player')
    } 
    else if (players == 2) {
        ids.push(socket.id)
        io.emit('start', 'player')
    }

    socket.on('marcar', (id) => {

        if (counter % 2 == 0 && ids[0] == socket.id) {
            io.emit('xTurno', id);
            counter += 1;
        } else if (counter % 2 != 0 && ids[1] == socket.id) {
            io.emit('oTurno', id);
            counter += 1;
        }

    });

    socket.on('reset', () => {
        counter = 0;
        io.emit('reinicarJuego', 'res');
    });

    socket.on('disconnect', () => {
        players -= 1;
        removeItem(ids, socket.id);
        io.emit('wait', 'player')
    });
});

http.listen(port, () => {
  console.log('listening on *: ' + port);
});