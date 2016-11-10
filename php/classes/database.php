<?php
    class database
    {
        function __construct($pdo)
        {
            $this->pdo = $pdo;
        }

        function getData($table)
        {   
            switch ($table) {
                case 'users':
                    $query = $this->pdo->prepare('SELECT * FROM users');
                    break;
                case 'teams' :
                    $query = $this->pdo->prepare('SELECT * FROM teams');

                default:
                    # code...
                    break;
            }
            
            $query->execute();
            return $query->fetchAll();
        }
    }
?>