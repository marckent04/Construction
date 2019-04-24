<?php


require './verify.php';
require './database.php';
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $results = ['mailR' => 0, 'mdpR' => 0];
    $postdata = json_decode($postdata);
    $mail = $postdata->mail;
    $mdp =$postdata->mdp;
    $mdp = Verify::input($mdp);
    $mail = Verify::input($mail);

    $query = $db->prepare('SELECT users.*, typeintervenant.lib FROM users, typeintervenant WHERE mail = ? AND typeintervenant.id = users.work');
    $query->execute([$mail]);
    $infos = $query->fetch();

    if ($infos) {
        $results['mailR'] = 1;
        $mdpCrypt = $infos['mdp'];
        if (password_verify($mdp, $mdpCrypt)) {
            $results['mdpR'] = 1;

            $results['id'] = $infos['id'];
            $results['mail'] = $infos['mail'];
            $results['name'] = $infos['name'];
            $results['fname'] = $infos['firstname'];
            $results['Work'] = $infos['work'];
            $results['picture'] = $infos['picture'];
            $results['mdp'] = $infos['mdp'];
            $results['type'] = $infos['lib'];

        }
    }
    echo json_encode($results);
}