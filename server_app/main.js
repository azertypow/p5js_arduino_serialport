//----------
//websocket communication
//----------

const app = require('http').createServer()
const io = require('socket.io')(app);
const fs = require('fs');


app.listen(3000)


//----------
//serial port communication
//----------

const SerialPort    = require('serialport');
const Readline      = require('@serialport/parser-readline');

const port = new SerialPort('/dev/tty.usbmodem14101', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data
port.on("open", () => {
    console.log('serial port open');
});


//----------
// serial port and websocket
//----------

io.on("connection", (socket) => {

    console.log("new connection")

    parser.on('data', data => {
        console.log('got word from arduino:', data)
        socket.emit("buttonClicked")
    })

});
