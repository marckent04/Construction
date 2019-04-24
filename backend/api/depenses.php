<?php

#SELECT taches.title AS title, taches.description AS description, taches.montant AS montant, taches.validateAt AS dateFin FROM taches WHERE taches.id_project = 1 UNION (SELECT depenses.lib, depenses.description, depenses.montant, depenses.date_dep WHERE depenses.id_project = 1) ORDER BY dateFin desc
if (isset($_GET['id']) && !empty($_GET['id'])) {
	require 'database.php';
	require 'verify.php';
	$id = Verify::input($_GET['id']);
	$req= $db->prepare('SELECT taches.title AS title, taches.description AS description, taches.montant AS montant, taches.validateAt AS dateD	 FROM taches WHERE taches.id_project = ? AND taches.valid = 1 UNION (SELECT depenses.lib, depenses.description, depenses.montant, depenses.date_dep FROM depenses WHERE depenses.id_project = ?) ORDER BY dateD desc');

	$req->execute([$id, $id]);


	$depenses = $req->fetchAll();

	echo json_encode($depenses);

}
