<?php
require './database.php';
require './verify.php';



$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $response = ['result' => false];
    $postdata = json_decode($postdata);
    $name = Verify::input($postdata->name);
    $fname = Verify::input($postdata->fname);
    $mail = Verify::input($postdata->mail);
    $work = Verify::input($postdata->work);
    $mdp = Verify::input($postdata->mdp);

    $options = [
        'cost' => 15,
    ];
    
    $mdpCrypt = password_hash($mdp, PASSWORD_BCRYPT, $options);

    $results = Verify::user($mail, $db, 'users', 'mail');
    if(!$results) {
        $query = $db->prepare('INSERT INTO users (name, firstname, mail, mdp, work) VALUES( ?, ?, ?, ?, ?)');
        $query->execute([$name, $fname, $mail, $mdpCrypt, $work]);
        $response['result'] = true;
    } else {
        $response['result'] = false;
    }

    echo json_encode($response['result']);



    // $insert = $db->prepare('INSERT INTO users (name, firstname, mail, mdp, work) VALUES (?, ?, ?, ?, ?)');
    // $insert->execute([$name, $fname, $mail, $mdp, $work]);


    //echo json_encode($insert);
}
