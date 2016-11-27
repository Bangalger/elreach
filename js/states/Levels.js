var ZPlat = ZPlat || {
};

/* All Variables */


var first_name;
var actualLevel;
var teams;
var teamsButton;
var pepe= "holaa";

/* Global Vars */
var user_id=1;
var team_id;
var level;

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
			teamButton = this.game.add.button(i*220, 100, 'teamButtons',this.actionOnClick, this, 2, 1, 0);
			teamButton.onInputOver.add(over, this);
		    teamButton.onInputOut.add(out, this);
		    teamButton.onInputUp.add(up, this);
			teamButton.id = teams[i].team_id;
		}	
	},

	actionOnClick:function(button){
		team_id = button.id;
			alert(team_id);
				getLevel(function(output){
				  console.log(output);
				  level=output;
				},'level');
				
				this.state.start('Game');
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

function up() {
  //  console.log('button up', arguments);
}

function over() {
}

function out() {
}


function getLevel(handleData,request) {
  $.ajax({
    url:"http://localhost:8012/elreach/php/classes/index.php",
    type: 'POST',
    data: {consulta: request, team_id: team_id},  
    success:function(data) {
      handleData(jQuery.parseJSON(data)); 
    }
  });
}