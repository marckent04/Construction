<?php
    require 'database.php';
    require 'verify.php';

    $err = -1;
    if (isset($_GET['id']) && !empty($_GET['id']) && isset($_GET['work']) && !empty($_GET['work'])) {
        $intervenant = null;

        $id = Verify::input($_GET['id']);
        $work = Verify::input($_GET['work']);

        if ($work == '1') {
            $req = $db->prepare('SELECT * from project WHERE id_proprio = ?');
        } else {
            $req = $db->prepare('SELECT project.*, users.name, users.firstname, users.mail from project, users WHERE project.id_ent = ? AND users.id = project.id_proprio');
        }

        if (isset($req) && !empty($req)) {
            $ok = $req->execute([$id]);
        }

        if ($ok) {
            $err = 1;
            $projects = $req->fetchAll();
        } else {
            $err= 0;
        }
        

        if ($err === 1) {
            echo json_encode($projects);
        } else {
            echo json_encode($err);
        }
}

        