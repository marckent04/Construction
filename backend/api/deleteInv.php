<?php

require 'database.php';
require 'verify.php';


if (isset($_GET['id']) && !empty($_GET['id'])) {
  $id = Verify::input($_GET['id']);

  $req = $db->prepare('DELETE FROM invitation WHERE id = ?');
  $ok = $req->execute([$id]);
  echo json_encode($ok);
} 