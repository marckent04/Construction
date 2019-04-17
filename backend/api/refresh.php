<?php 
require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = Verify::input($_GET['id']);

    $req = $db->prepare('SELECT * FROM users WHERE id = ?');
    $req->execute([$id]);

    $newSession = $req->fetch();

    echo json_encode($newSession);
}