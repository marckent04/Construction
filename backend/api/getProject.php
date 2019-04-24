<?php
if (isset($_GET['id']) && !empty($_GET['id'])) {
    require 'database.php';
    require 'verify.php';
    $sql = 'SELECT project.*, users.firstname AS fEnt, users.name AS nEnt FROM project, users WHERE project.id = ? AND users.id = (SELECT project.id_ent FROM project WHERE project.id = ?)';

    $id = Verify::input($_GET['id']);

    //$depenses = $db->prepare('SELECT SUM(taches.montant) AS montant FROM taches WHERE taches.id_project = ? AND taches.valid = 1 UNION (SELECT depenses.lib, depenses.description, depenses.montant, depenses.date_dep FROM depenses WHERE depenses.id_project = ?) ORDER BY dateD desc');
    $req = $db->prepare($sql);
    $ok = $req->execute([$id, $id]);
    if ($ok) {
        $project = $req->fetch();
    }

    echo json_encode($project);
}
//$req= $db->prepare('SELECT SUM(taches.montant) AS montant FROM taches WHERE taches.id_project = ? AND taches.valid = 1 UNION (SELECT SUM(depenses.montant) FROM depenses WHERE depenses.id_project = ?)');