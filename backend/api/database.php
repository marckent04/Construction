<?php
//header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'construction');

function connect () {
    try {
        $connexion = new PDO('mysql:host='. DB_HOST .';dbname=' . DB_NAME, DB_USER, DB_PASS);
    }
    catch(PDOException $e) {
        die($e->getMessage());

    }

    return $connexion;
}


$db = connect();