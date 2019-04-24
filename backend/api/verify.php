<?php
class Verify
{

    public static function input($data)
    {
        $data = htmlspecialchars($data);
        $data = htmlentities($data);
        $data = trim($data);
        $data = strip_tags($data);

        return $data;
    }

    public static function user($mail, $db, $table, $col)
    {

        $result = $db->prepare('SELECT * FROM ? WHERE ? = ?');
        $result->execute([$table, $col, $mail]);
        $result = $result->fetchAll();

       return $result;
    }

    public static function image ($tmpname){
        $result = true;
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mtype = finfo_file($finfo, $tmpname);
        if(!(strpos($mtype, 'image/') === 0)){
            $result =  false;
        }
        finfo_close($finfo);
        return $result;
    }
}
