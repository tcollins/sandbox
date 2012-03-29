var APP = {

	init:		function(){					
					this.socket = io.connect('http://localhost:4000');
				},
				
	sendMsg:	function(msg){
					this.socket.emit('private message', {      
					      msg: msg
    				});
				}

}


 