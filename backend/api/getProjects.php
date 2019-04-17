<?php
    require 'database.php';
    $err = -1;
    if (isset($_GET['id']) && !empty($_GET['id'])) {
        $id = $_GET['id'];
        $req = $db->prepare('SELECT * from project WHERE id_proprio = ?');
        $ok = $req->execute([$id]);
        $projects = $req->fetchAll();
        if ($ok) {
            $err = 1;
            
        } else {
            $err= 0;
        }
    }

    if ($err === 1) {
        echo json_encode($projects);
    } else {
        echo json_encode($err);
    }