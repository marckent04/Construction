<?php

require 'database.php';
require 'verify.php';

define('PATH', '../../frontend/src/assets/uploads/tasks/');

if (isset($_POST['id']) && !empty($_POST['id'])) {
    $results = ['type' => false, 'size' => true, 'upload' => null, 'ext' => true    ];

    $nbUploads = count($_FILES);

    $nbok = 0;
    $id = Verify::input($_POST['id']);

    foreach ($_FILES as $file) {
        $check = getimagesize($file['tmp_name']);
        if($check) {
            $results['type'] = true;
        }
    }


    $toDb = [];
    if($results['type']) {
        foreach ($_FILES as $file) {
                array_push($toDb, basename($file["name"]));

                $target_file = PATH . basename($file["name"]);
                if (move_uploaded_file($file["tmp_name"], $target_file)) { 
                    $nbok++;
                } else {
                    $results['upload'] = false;
                }
        }
    }

    if ($nbok === $nbUploads) {
        $req = $db->prepare('UPDATE taches SET statut = 1, finishedAt = now() WHERE id = ?');
        $results['upload'] = $req->execute([$id]);

        if ($results['upload']) {
            foreach ($toDb as $value) {
                $req2 = $db->prepare('INSERT INTO images (id_task, img) VALUES (?, ?)');
                $req2->execute([$id, $value]);
            }
        }
    }


    echo json_encode($results);    
}

    

    



