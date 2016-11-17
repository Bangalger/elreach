var ZPlat = ZPlat || {
};
var user_id=1;
ZPlat.LevelsState={

	preload:function(){

	},

	create:function(){
		getRequests(function(output){
		 	console.log(output[0].first_name);
		},'users');

	},
	update:function(){
	}
}

function getRequests(handleData,request) {
  $.ajax({
    url:"http://localhost/elreach/php/classes/index.php",
    type: 'POST',
    data: {consulta: request},  
    success:function(data) {
      handleData(jQuery.parseJSON(data)); 
    }
  });
}
