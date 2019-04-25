<?php
   require 'database.php';
   require 'verify.php';

   define('PATH', '../../frontend/src/assets/uploads/projects/');
   $success = ['post' => false, 'upload' => false, 'img' => true];
    $insert = ['nP' => null, 'arch' => null,'budget' => null,  'desc' => null, 'dateFin' => null, 'location' => null];

    if(isset($_POST) && !empty($_POST)) {
        $success['post'] = true;
        extract($_POST,EXTR_OVERWRITE);
        $nom = Verify::input($nom);
        $arch = Verify::input($arch);
        $budget = Verify::input($budget);
        $fin = Verify::input($fin);
        $location = Verify::input($location);
        $description = Verify::input($description);
        $idProprio = Verify::input($idProprio);

        $insert['nP'] = $nom;
        $insert['location'] = $location;
        $insert['budget'] = $budget;

        if (!empty($arch)) {
            $insert['arch'] = $arch; 
        }

        if (!empty($description)) {
            $insert['desc'] = $description;
        }

        if (!empty($fin)) {
            $insert['dateFin'] = $fin;
        }



    }

    if ($_FILES['image']) {
        if ($_FILES['image']['error'] > 0) {
            $success['img'] = false; 
        }
        else {
            
            $img = $_FILES["image"]["tmp_name"];
            $imgName = $_FILES["image"]["name"];
            $mime = mime_content_type($img);
            $data = file_get_contents($img);

            $ok = Verify::image($img);

            if ($ok) {
                $target_file = PATH . $idProprio .'-'. basename($imgName);
                //$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
                //echo json_encode($imageFileType);
                // if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
                //     $success['img'] = false;
                // } else {
                    if(move_uploaded_file($img, $target_file)) {
                        $success['upload'] = true;
                        $imgName = basename($imgName);
                   }
                //}
            } else {
                $success['img'] = false;
            }
        }
    }

    if ($success['post'] && $success['img']) {
        $add = $db->prepare('INSERT INTO project (nomProjet, nomArchitecte, budget, dateFin, emplacement, imageProjet, id_proprio) VALUES (?, ?, ?, ?, ?, ?, ?)');
        $success['upload'] = $add->execute([$insert['nP'], $insert['arch'], $insert['budget'], $insert['dateFin'], $insert['location'], $imgName, $idProprio]);
    }

    echo json_encode($success);