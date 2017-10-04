

$(document).ready(function() {
	
	
	

	var pass;
	var user;
	



	$( "#btn" ).click(function() {
		 user = $('#username').val();
		pass = $('#password').val();

		// localStorage['user'] = user; // only string
		// localStorage['pass'] = pass; // only string
		Login(user,pass, function(data) {
      		if(data == "Success"){
      			alert("LoggedIn");
      			localStorage['user'] = user; // only string
		 		localStorage['pass'] = pass; // only string



      		}
      		else{
      			alert("Error Logging In");
      			localStorage.clear();
      		}
    });

	});
		

		setInterval(function(){
		 			getMessages();
		 			console.log("CHECKING!!>>");
		 		},500);


	// setInterval(function() {
	// 	alert(user)
	// 	if(pass !=null && user!=null){
	// 		getMessages(user,pass);
	// 	}
	// }, 2000);


	$("#smsg").click(function(){
		
			sendMessages(user,pass);
	});
	



});

function getMessages(username,password) {

			 var user = localStorage['user'] || 'defaultValue';
			 var pass = localStorage['pass'] || 'defaultValue';
		
	$.ajax({
		url:'http://192.168.1.189/webapp/Messages.php',
		data: {user:user,pass:pass},
		dataType:'json',
		success:function(data){
			
			$("#msg").empty();
			for(var i=0;i<data.length;i++){
				$("#msg").append($("<li>").text(data[i]));

			}
			
		},
		error: function(){
			//alert("eroro2\\");
		}
	});

	
	// body...
}

function Login(username,password,fn) {
	alert(username);
		alert(password);

		var result;
	
	$.ajax({
		url:'http://192.168.1.189/webapp/Chat.php',
		data: {user:username,pass:password},
		dataType:'json',
		success:function(data){

			fn(data[0]);
			//alert(data[0]);
			
			// var user = localStorage['user'] || 'defaultValue';
			// var pass = localStorage['pass'] || 'defaultValue';
			// getMessages(user,pass);
			
		},
		error: function(){
			alert("eroro2");
			result = data[0];
		}



	});
	return result;
}




function sendMessages(username,password) {

	var message = document.getElementById('message').value;
	//alert(message);
	var user = localStorage['user'] || 'defaultValue';
	var pass = localStorage['pass'] || 'defaultValue';
	
	$.ajax({
		url:'http://192.168.1.189/webapp/insertMessage.php',
		data: {username:user,message:message},
		dataType:'json',
		success:function(data){
			getMessages(username,password);
			document.getElementById('message').value="";
			


			
		},
		error: function(){
			alert("eroro");
		}
	});
};	// body...




