<?php
    require_once 'config.php';
    require_once 'database.php';
    $db = new database($pdo);
    $rows = $db->getData('teams');

    print_r($rows)
?>