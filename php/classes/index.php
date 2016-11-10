<?php
    require_once 'config.php';
    require_once 'database.php';
    $db = new database($pdo);
    $rows = $db->getData();

    print_r($rows)
?>