<?php
   require 'database.php';
   require 'verify.php';


   $success = ['post' => false, 'upload' => false, 'img' => false];
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
        $img = $_FILES["image"]["tmp_name"];
        $imgName = $_FILES["image"]["name"];
        $mime = mime_content_type($img);
        $data = file_get_contents($img);

        $ok = Verify::image($img);
        if ($ok) {
            $base64 = 'data:' . $mime. ';base64,'. base64_encode($data);
            $success['img'] = true;
        }
    }

    if ($success['post'] && $success['img']) {
        $add = $db->prepare('INSERT INTO project (nomProjet, nomArchitecte, budget, dateFin, emplacement, imageProjet, id_proprio) VALUES (?, ?, ?, ?, ?, ?, ?)');
        $success['upload'] = $add->execute([$insert['nP'], $insert['arch'], $insert['budget'], $insert['dateFin'], $insert['location'], $base64, $idProprio]);
    }

    echo json_encode($success);






















//         $error = $_FILES["image"]["error"];

//         if ($error > 0) {
//             $response = array(
//                 "status" => "error",
//                 "error" => true,
//                 "message" => "Error uploading the file!"
//             );
//         }
//         else 
//         {
//             $random_name = rand(1000,1000000)."-".$imgName;
//             $upload_name =$upload_dir . strtolower($random_name);
//             $upload_name = preg_replace('/\s+/', '-', $upload_name);
            
//             if(move_uploaded_file($img , $upload_name)) {
//                 $response = array(
//                     "status" => "success",
//                     "error" => false,
//                     "message" => "File uploaded successfully",
//                     "url" => $upload_name
//                 );

//                 $data = base64_encode($img); 
//                 echo $data;
//             }else
//             {
//                 $response = array(
//                     "status" => "error",
//                     "error" => true,
//                     "message" => "Error uploading the file!"
//                 );
//                 }
//             }
//         //$crypt = base64_encode($file);
//     //$target = 'C:\Users\Labo de travail\Desktop\upload';
//     //move_uploaded_file($_FILES["image"]["tmp_name"], $target);
//     echo json_encode($response);

//         }
// }


