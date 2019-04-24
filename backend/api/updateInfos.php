<?php

require 'database.php';
require 'verify.php';


if (isset($_POST) && !empty($_POST)) {

define('PATH', '../../frontend/src/assets/uploads/profile/');


    extract($_POST,EXTR_OVERWRITE);
    $results = ['mdp' => true, 'success' => true, 'img' => null, 'upload' => false];
    $name = Verify::input($name);
    $id = Verify::input($id);
    $amdp = Verify::input($amdp);
    $newMdp = Verify::input($newMdp);

    $infosUser = $db->prepare('SELECT * FROM users WHERE id = ?');
    $infosUser->execute([$id]);

    $infosUser = $infosUser->fetch();


    
    if (empty($name)) {
       $name = $infosUser['name'];
    }

    if (empty($fname)) {
        $fname = $infosUser['firstname'];
    }

    if (!empty($amdp)) {
        $mdpCrypt = $infosUser['mdp'];
        if (!password_verify($amdp, $mdpCrypt)) {
            $newMdp = $infosUser['mdp'];
            $results['mdp'] = false;
            $results['success'] = false;
        } else {
            $options = [
                'cost' => 15,
            ];
            
            $newMdp = password_hash($newMdp, PASSWORD_BCRYPT, $options);
        }
    } else {
        $newMdp = $infosUser['mdp'];
    }

    
    if (isset($_FILES) && !empty($_FILES)) {
        if ($_FILES['image']['error'] > 0) {
            $results['img'] = false;
            $results['success'] = false;
        } else {
            $img = $_FILES["image"]["tmp_name"];
            $imgName = $_FILES["image"]["name"];
            $mime = mime_content_type($img);
            $data = file_get_contents($img);

            $ok = Verify::image($img);
            if ($ok) {
                $target_file = PATH . basename($imgName);
                if (move_uploaded_file($img, $target_file)) {
                    $results['img'] = true;
                    $imgName = basename($imgName);
                }
                //$base64 = 'data:' . $mime. ';base64,'. base64_encode($data);
            }
            else {
                $results['img'] = false;
                $imgName = $infosUser['picture'];
                $results['success'] = false;
            }
        }
        
    } else {
        $imgName = $infosUser['picture'];
    }





    if ($results['success']) {
        $update = $db->prepare('UPDATE users SET name = ?, firstname = ?, mdp = ?, picture = ? WHERE id = ?');
        $results['success'] = $update->execute([$name, $fname, $newMdp, $imgName, $id]);
    }


    echo json_encode($results);


}

// if (isset($_FILES) && !empty($_FILES)) {
//     echo json_encode($_FILES);
// }