<?php

require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET["id"])) {
    $id = Verify::input($_GET['id']);
    $images = [];
    //'SELECT taches.* FROM taches WHERE id_project = ? ORDER BY createAt DESC'
    $req = $db->prepare('SELECT * FROM taches WHERE id_project = ? ORDER BY createAt DESC');
    $ok = $req->execute([$id]);

    $total = 0;
    $taches = $req->fetchAll();
    foreach ($taches as $tache) {
        $image = $db->prepare('SELECT COUNT(*) AS nbre FROM images WHERE id_task = ?');
        $image->execute([$tache['id']]);
        array_push($images, $image->fetch());
    }

    $results = [$taches, $images];

    //$results = array_merge($taches, $images);
    //var_dump($taches);
    echo json_encode($results);
}