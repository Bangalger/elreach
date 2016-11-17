var ZPlat = ZPlat || {
};

/* All Variables */

var user_id=1;
var actualLevel;

ZPlat.LevelsState={

	preload:function(){

	},

	create:function(){
		
		getRequests(function(output){
		 	console.log(output[0].first_name);
		},'users');

		getRequests(function(output){
		 	console.log(output);
		},'teams');

	},
	update:function(){
	}
}

function getRequests(handleData,request) {
  $.ajax({
    url:"http://localhost/elreach/php/classes/index.php",
    type: 'POST',
    data: {consulta: request, id: user_id},  
    success:function(data) {
      handleData(jQuery.parseJSON(data)); 
    }
  });
}
