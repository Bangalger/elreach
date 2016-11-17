var ZPlat = ZPlat || {};
ZPlat.LevelsState={

	preload:function(){
		console.log("Something");
		$.post('http://localhost/elreach/php/classes/index.php', { consulta: "users"}, 
     		function(returnedData){
        	console.log(returnedData);
		}, 'json');
	},

	create:function(){

	},
	update:function(){

	}
}