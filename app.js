var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies

server.listen(8100);

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var clients = []
  for(var socket in io.sockets.sockets)
  {
    clients.push(socket)
    if (clients.length == Object.keys(io.sockets.sockets).length){
      res.end(JSON.stringify({ 'clients':  clients}));
    }
  }
  if (Object.keys(io.sockets.sockets).length == 0){
    res.end(JSON.stringify({ 'clients':  []}));
  }
});

app.post('/send', function (req, res) {
  console.log(req.body);
  io.to(req.body.id).emit('message', { title: req.body.title, body: req.body.body});
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'result': 'Request Processed' }));
});

io.on('connection', function (socket) {
  console.log(socket.id);
  //socket.emit('message', { title: 'hello', body: 'welcome' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
