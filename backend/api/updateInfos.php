<?php

require 'database.php';
require 'verify.php';

if (isset($_POST) && !empty($_POST)) {
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
        $img = $_FILES["image"]["tmp_name"];
        $imgName = $_FILES["image"]["name"];
        $mime = mime_content_type($img);
        $data = file_get_contents($img);

        $ok = Verify::image($img);
        if ($ok) {
            $base64 = 'data:' . $mime. ';base64,'. base64_encode($data);
            $results['img'] = true;
        }
        else {
            $results['img'] = false;
            $base64 = $infosUser['picture'];
            $results['success'] = false;
        }
    } else {
        $base64 = $infosUser['picture'];
    }





    if ($results['success']) {
        $update = $db->prepare('UPDATE users SET name = ?, firstname = ?, mdp = ?, picture = ? WHERE id = ?');
        $results['success'] = $update->execute([$name, $fname, $newMdp, $base64, $id]);
    }


    echo json_encode($results);


}

// if (isset($_FILES) && !empty($_FILES)) {
//     echo json_encode($_FILES);
// }