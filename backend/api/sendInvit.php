<?php

require 'database.php';
require 'verify.php';


if (isset($_POST) && !empty($_POST)) {
   
    $success= ['mdp'=> true, 'mail' => true, 'verify' => false, 'ok' => false, 'exist' => false];
    extract($_POST, EXTR_OVERWRITE);

    $mail = Verify::input($mail);
    $mdp = Verify::input($mdp);
    $lvlInt = 2;
    $trueMdp = Verify::input($trueMdp);
    $idUser = Verify::input($idUser);
    $idProject = Verify::input($idProject);

    if (!password_verify($mdp, $trueMdp)) {
        $success['mdp'] = false;
    }
    else {
       
        $result = $db->prepare('SELECT * FROM users WHERE mail = ?');
        $result->execute([$mail]);
        $result = $result->fetch();


        if (!$result) {
            $success['mail'] = false;
        
        } else {
            $verif = $db->prepare('SELECT * FROM invitation WHERE idProject = ? AND idRecepteur = ?');
            $verif->execute([$idProject, $result['id']]);
            $verif = $verif->fetch();
         
            if (!$verif) {
                if ($success['mdp'] && $success['mail']) {
                    if (isset($_GET['action']) && ($_GET['action'] == 1)) {
                        $req = $db->prepare('INSERT INTO invitation(idProject, idEmetteur, idRecepteur) VALUES (?, ?, ?)');
                        $success['ok'] = $req->execute([$idProject, $idUser, $result['id']]);
                    } else if ($_GET['action'] == 0){
                        //echo json_encode($result);
                        if ($result['work'] == 2) {
                            $success['fname'] = $result['firstname'];
                            $success['name'] = $result['name'];
                            $success['ok'] = true;
        
                        } else {
        
                        }
                    } else {
                
                    }
                }
        
            } else {
                $success['exist'] = true;
                $result['ok'] = false;
            }
        }

        



       
    
    }

    echo json_encode($success);
} 