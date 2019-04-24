<?php
require 'database.php';
require 'verify.php';


if (isset($_GET['id']) && !empty($_GET['id'])) {
    $ok = ['invitation' => null, 'project' => null];
    $id = Verify::input($_GET['id']);
    $req = $db->prepare('UPDATE invitation SET statut = 1 WHERE id = ?');
    $ok['invitation'] = $req->execute([$id]);

    $req2 = $db->prepare('UPDATE project SET id_ent = (SELECT idRecepteur FROM invitation WHERE id = ? ) WHERE id = (SELECT idProject FROM invitation WHERE id = ?)');
    $ok['project'] = $req2->execute([$id, $id]);

    echo json_encode($ok);
}
