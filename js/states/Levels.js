var ZPlat = ZPlat || {
};

/* All Variables */

var user_id=1;
var first_name;
var actualLevel;
var teams;
var teamsButton;

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
		this.game.load.spritesheet('teamButtons', 'assets/buttons/levelButton.png', 203,66);

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
			teamButton = this.game.add.button(i*220, 100, 'teamButtons',actionOnClick, this, 2, 1, 0);
			teamButton.onInputOver.add(over, this);
		    teamButton.onInputOut.add(out, this);
		    teamButton.onInputUp.add(up, this);
			teamButton.id = i;
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


function actionOnClick(button){
	alert(button.id);
	console.log("ghi");
}

function up() {
  //  console.log('button up', arguments);
}

function over() {
}

function out() {
}
