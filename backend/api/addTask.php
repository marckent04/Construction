<?php

require 'database.php';

require 'verify.php';

//echo 'ok';
if (isset($_POST) && !empty($_POST)) {
    
    $results = ['success' => true, 'ok' => false];
    extract($_POST, EXTR_OVERWRITE);

    $begin = Verify::input($begin);
    $besoin = Verify::input($besoin);
    $deadline = Verify::input($deadline);
    $description = Verify::input($description);
    $idProject = Verify::input($idProject);
    $respo = Verify::input($respo);
    $title = Verify::input($title);
    $montant = Verify::input($montant);
    //echo json_encode($_POST);


    if ($results['success']) {
        $req = $db->prepare('INSERT INTO taches (title, id_project, begin,  deadline, chef, montant, description, ressources) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        $results['ok'] = $req->execute([$title, $idProject,$begin, $deadline, $respo, $montant, $description, $besoin]);
    }

//     if($results['ok']) {
//         //envoie de email
//         $req = $db->prepare('SELECT users.mail AS mail, users.name AS nom, users.firstname AS prenoms project.nomProjet AS projet FROM users, project WHERE users.id = project.id_proprio AND project.id = ?');
//         $req->execute([$idProject]);
//         $infos = $req->fetch();

//         $me = 'BuildApp';
//         $buildAppMail = 'marc052011@live.fr';
//         $mail = $infos['mail']; // Déclaration de l'adresse de destination.
//         $projet = $infos['projet'];
//         $destinataire = $infos['prenoms'] . $infos['nom'];
//         if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
//         {
//             $passage_ligne = "\r\n";
//         }
//         else
//         {
//             $passage_ligne = "\n";
//         }
//         //=====Déclaration des messages au format texte et au format HTML.
//         $message_txt = 'Bonjour Mr. ' . $destinataire .', Une nouvelle tache a ete ajoutee au projet ' . $projet . ' et est en attente de confirmation';
//         $message_html = '<html><head></head><body>Bonjour Mr. ' . $destinataire .', Une nouvelle tache a ete ajoutee au projet ' . $projet . ' et est en attente de confirmation</body></html>';
//         //==========
        
//         //=====Création de la boundary
//         $boundary = "-----=".md5(rand());
//         //==========
        
//         //=====Définition du sujet.
//         $sujet = "Nouvelle tache ajoutee";
//         //=========
        
//         //=====Création du header de l'e-mail.
//         $header = "From: \"$me\"<$buildAppMail>".$passage_ligne;
//         $header.= "Reply-to: \"$me\" <$buildAppMail>".$passage_ligne;
//         $header.= "MIME-Version: 1.0".$passage_ligne;
//         $header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//         //==========
        
//         //=====Création du message.
//         $message = $passage_ligne."--".$boundary.$passage_ligne;
//         //=====Ajout du message au format texte.
//         $message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
//         $message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
//         $message.= $passage_ligne.$message_txt.$passage_ligne;
//         //==========
//         $message.= $passage_ligne."--".$boundary.$passage_ligne;
//         //=====Ajout du message au format HTML
//         $message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
//         $message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
//         $message.= $passage_ligne.$message_html.$passage_ligne;
//         //==========
//         $message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//         $message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//         //==========
        
//         //=====Envoi de l'e-mail.
//         mail($mail,$sujet,$message,$header);
// //==========
//     }

    echo json_encode($results);
}