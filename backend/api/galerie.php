<?php

require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = Verify::input($_GET['id']);
    $req = $db->prepare('SELECT images.img, taches.title FROM images, taches WHERE taches.id_project = ? AND images.id_task = taches.id ORDER BY images.id DESC');
    $req->execute([$id]);

    $images = $req->fetchAll();

    echo json_encode($images);
}