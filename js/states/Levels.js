var ZPlat = ZPlat || {
};
var users;
var test=1;
ZPlat.LevelsState={

	preload:function(){

	},

	create:function(){
		testAjax(function(output){
		 	console.log(output);
		});

	},
	update:function(){
	}
}

function getUsers(){
		$.post('http://localhost/elreach/php/classes/index.php', { consulta: "users"}, 
     		function(returnedData){
        	users = returnedData;
			//console.log(users[0]['first_name']);
			return "Hi";
		}, 'json');
	return "Hi";
}

function testAjax(handleData) {
  $.ajax({
    url:"http://localhost/elreach/php/classes/index.php",
    type: 'POST',
    data: {consulta:'users'},  
    success:function(data) {
      handleData(data); 
    }
  });
}