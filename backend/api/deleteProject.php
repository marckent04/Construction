<?php
 #DELETE FROM taches, depenses, images, invitation, project WHERE taches.id_project = 1 AND depenses.id_project = 1 AND invitation.idProject = 1 AND images.id_project = 1 AND project.id = 1

require 'database.php';
require 'verify.php';

 #supprimer images projet 
$sql1 = 'DELETE FROM images WHERE images.id_task IN (SELECT taches.id FROM taches WHERE taches.id_project = ?)';
 #supprimer taches
$sql2 = 'DELETE FROM taches WHERE id_project = ?';
 #supprimer depenses
$sql3 = 'DELETE FROM depenses WHERE id_project = ?';
  #supprimer invitation
$sql4 = 'DELETE FROM invitation WHERE idProject = ?';
 #supprimer projet
$sql5 = 'DELETE FROM project WHERE id = ?';

$ok = [];
 if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = Verify::input($_GET['id']);

    $req1 = $db->prepare($sql1);
    $req1->execute([$id]);

    $req2 = $db->prepare($sql2);
    $req2->execute([$id]);

    $req3 = $db->prepare($sql3);
    $req3->execute([$id]);

    $req4 = $db->prepare($sql4);
    $ok = $req4->execute([$id]);

    $req5 = $db->prepare($sql5);
    $ok = $req5->execute([$id]);

    echo json_encode($ok);
 }


