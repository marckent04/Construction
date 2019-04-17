<?php
if (isset($_GET['id']) && !empty($_GET['id'])) {
    require 'database.php';
    require 'verify.php';

    $id = Verify::input($_GET['id']);

    $req = $db->prepare('SELECT * FROM project WHERE id = ?');
    $ok = $req->execute([$id]);
    if ($ok) {
        $project = $req->fetch();
    }

    echo json_encode($project);
}
