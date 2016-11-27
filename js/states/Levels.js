var ZPlat = ZPlat || {
};

/* All Variables */

var user_id=1;
var first_name;
var actualLevel;
var teams;
var teamsButton;
var pepe= "holaa";

/* Global Vars */

var team_id;

/* End Global Vars */

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
		this.game.load.spritesheet('teamButtons', 'assets/buttons/levelButton.png', 203,66);

	},

	create:function(){
		this.createButtons();
		//console.log(teams[0].team_id);

	},
	update:function(){
	},

	createButtons:function(){
		for(var i= 0; i < teams.length; i++){
			teamButton = this.game.add.button(i*220, 100, 'teamButtons',actionOnClick, this, 2, 1, 0);
			teamButton.onInputOver.add(over, this);
		    teamButton.onInputOut.add(out, this);
		    teamButton.onInputUp.add(up, this);
			teamButton.id = teams[i].team_id;
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
	
	team_id = button.id;
	alert(team_id);
	this.state.start('Game');
}

function up() {
  //  console.log('button up', arguments);
}

function over() {
}

function out() {
}
