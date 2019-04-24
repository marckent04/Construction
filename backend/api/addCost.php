<?php
 require 'database.php';
 require 'verify.php';

 $ok = false;
 if (isset($_POST) && !empty($_POST)) {
     extract($_POST, EXTR_OVERWRITE);

     $lib = Verify::input($lib);
     $montant = Verify::input($montant);
     $dateD = Verify::input($date);
     $comment = Verify::input($comment);
     $id = Verify::input($id);


     $req = $db->prepare('INSERT INTO depenses(lib, id_project, montant, description, date_dep) VALUES (?, ?, ?, ?, ?)');
     $ok = $req->execute([$lib, $id, $montant, $comment, $date]);

}

echo json_encode($ok);