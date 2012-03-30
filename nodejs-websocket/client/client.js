var APP = {

	init:		function(){	
					var self =this;
					
					this.socket = io.connect('http://localhost:4000');
					
					this.msgContainer = $('#message-container');
					
					
					this.socket.on('new.msg', function (data) {
					    	console.log('new.msg', data);
					    	self.msgContainer.prepend('<div>'+data.user + ' - ' + data.msg+'</div>');
					});
					
				},
				
	setUsername:function(userName){
					this.socket.emit('set.username', {      
					      userName: userName
    				});
				},
				
	sendMsg:	function(msg){
					this.socket.emit('send.msg', {      
					      msg: msg
    				});
				}			

}


