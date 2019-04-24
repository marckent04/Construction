<?php

/*
SELECT users.name, users.firstname, project.nomProjet, invitation.dateEnvoi, invitation.id FROM users, project, invitation WHERE invitation.idProject = project.id AND invitation.idEmetteur = users.id AND invitation.idRecepteur = ?
*/

require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = Verify::input($_GET['id']);

    $req = $db->prepare('SELECT users.name, users.firstname, project.nomProjet, invitation.dateEnvoi, invitation.id FROM users, project, invitation WHERE invitation.idProject = project.id AND invitation.idEmetteur = users.id AND invitation.idRecepteur = ? AND invitation.statut = 0 ORDER BY dateEnvoi DESC');
    $req->execute([$id]);

    $invitations = $req->fetchAll();

    echo json_encode($invitations);
}
