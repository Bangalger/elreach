<?php
    class database
    {
        function __construct($pdo)
        {
            $this->pdo = $pdo;
        }

        function getData($table,$id=null) //Get all data and recive parameter
        {   
            switch ($table) {
                case 'users':
                    $query = $this->pdo->prepare('SELECT * FROM users');
                    break;
                case 'teams' :
                    //$query = $this->pdo->prepare('SELECT * FROM users, teams_users WHERE teams_users.user_id = 2 ');
                    $query = $this->pdo->prepare('SELECT teams_users.team_id FROM teams_users WHERE teams_users.user_id='.$id);
                    break;
                default:
                    # code...
                    break;
            }
            
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);

        }

        function getLevel( $team_id = null){
            $query = $this->pdo->prepare('SELECT * FROM teams INNER JOIN levels_teams ON teams.id=levels_teams.team_id INNER JOIN levels ON levels_teams.level_id = levels.id WHERE teams.id='.$team_id);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);

        }
    }
?>