<?php
    require_once 'config.php';
    require_once 'database.php';
    $db = new database($pdo); //Create new DB --> Send the config


    if(!empty($_POST["consulta"])){
    	$consulta = $_POST["consulta"];
    }
    if(!empty($_POST["id"])){
    	$id = $_POST["id"];
    }
    //echo $consulta;
    switch ($consulta) {
    	case 'users':
    		$rows = $db->getData('users');
    		break;

    	case 'teams':
    		$rows = $db->getData('teams',$id);
    		break;

        case 'one_team_level':
            $rows = $db->getData('teams',$id);
        
            break;
    	case 'level':
    		$rows = $db->getLevel();
    		break;
    	default:
    		# code...
    		break;
    }
    echo json_encode($rows);
    //print_r($rows)
?>