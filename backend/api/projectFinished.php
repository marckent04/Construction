<?php

require 'database.php';
require 'verify.php';
if (isset($_GET) && !empty($_GET)) {
    $id = Verify::input($_GET['id']);

    $req = $db->prepare('UPDATE project SET status = 1 WHERE id = ?');
    $ok = $req->execute([$id]);

    echo json_encode($ok);

}