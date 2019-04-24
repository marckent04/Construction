<?php

require 'database.php';
require 'verify.php';

if (isset($_GET['id']) && !empty($_GET['id']) && isset($_GET['choice']) && !empty($_GET['choice'])) {
    $ok = ['action' => null, 'ok' => false];
    $id = Verify::input($_GET['id']);
    $choice = Verify::input($_GET['choice']);

    if ($choice == 1) {
        $req = $db->prepare('UPDATE taches SET valid = 1, validateAt = now() WHERE id = ?');
        $ok['action'] = 'valid';
    } else {
        $req = $db->prepare('DELETE FROM taches WHERE id = ?');
        $ok['action'] = 'remove';
    }

    $ok['ok'] = $req->execute([$id]);

    echo json_encode($ok);
}