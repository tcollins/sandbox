
// note, io.listen(<port>) will create a http server for you
var io = require('socket.io').listen(4000);

io.sockets.on('connection', function (socket) {
	io.sockets.emit('this', { will: 'be received by everyone'});
	
	socket.on('set.username', function (data) {
    	console.log('set.username', data);
    	socket.set('username', data.userName, function () {
			socket.emit('ready');
    	});
  	});
  	
  	socket.on('send.msg', function (data) {
  		socket.get('username', function (err, name) {
		    console.log('Chat message by ', name);
			console.log(data);
	    	io.sockets.emit('new.msg', {user: name, msg: data.msg});
   		});	    	
  	});
  	
  	

  	socket.on('disconnect', function () {
  		io.sockets.emit('user disconnected');
  	});
});