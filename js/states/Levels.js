var ZPlat = ZPlat || {
};

/* All Variables */

var user_id=1;
var first_name;
var actualLevel;
var teams;

getRequests(function(output){
 	console.log(output[0].first_name);
 	first_name = output[0].first_name;
},'users');

getRequests(function(output){
 	teams = output;
},'teams');



ZPlat.LevelsState={

	preload:function(){
		//Load del spritesheet botón. (Nombre Único, Ubicación, Width (Del botón), Height(del botón))
		//this.game.load.spritesheet('teamButtons', 'assets/buttons/levelButton.png', 50, 53);
		this.game.load.image('teamButtons', 'assets/buttons/levelButton.png');

	},

	create:function(){
		//Carga del botón
		//this.teamButtons = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'teamButtons');
		this.createButtons();

	},
	update:function(){
	},

	createButtons:function(){
		for(var i= 0; i < teams.length; i++){
			this.teamButtons = this.game.add.sprite(i*12, 100, 'teamButtons');
		}	
	}
}

function getRequests(handleData,request) {
  $.ajax({
    url:"http://localhost:8012/elreach/php/classes/index.php",
    type: 'POST',
    data: {consulta: request, id: user_id},  
    success:function(data) {
      handleData(jQuery.parseJSON(data)); 
    }
  });
}


function actionOnClick(){
	alert("Click");
}
