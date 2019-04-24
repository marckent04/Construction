<?php

require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET["id"])) {
    $id = Verify::input($_GET['id']);
    $req = $db->prepare('SELECT * FROM taches WHERE id_project = ? ORDER BY createAt DESC');
    $ok = $req->execute([$id]);

    $taches = $req->fetchAll();

    echo json_encode($taches);
}