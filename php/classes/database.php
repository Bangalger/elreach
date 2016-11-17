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
                $query = $this->pdo->prepare('SELECT teams_users.team_id FROM teams_users WHERE teams_users.user_id = 1 ');

                default:
                    # code...
                    break;
            }
            
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);

        }

        function getLevel(){
            $query = $this->pdo->prepare('SELECT * FROM levels_teams');
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);

        }
    }
?>