<?php
    require_once 'config.php';
    require_once 'database.php';
    $db = new database($pdo); //Create new DB --> Send the config


    if(!empty($_POST["consulta"])){
    	$consulta = $_POST["consulta"];
    }
    //echo $consulta;
    switch ($consulta) {
    	case 'users':
    		//echo 'yey';
    		$rows = $db->getData('users');
    		//print_r($rows);
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