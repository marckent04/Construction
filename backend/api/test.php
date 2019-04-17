<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $base64_string  ; 
        $content = base64_decode($base64_string);
    ?>
    <form action="createProject.php" method="post" enctype="multipart/form-data">
    <div class="form-group">
            <label for="image">Image projet</label>
            <input type="file" id="image" class="form-control" name="image">
        </div>
        
        <button type="submit" class="btn btn-large btn-block btn-success">button</button>
    </form>
    <p>sss</p>
    <img src="QzpceGFtcHBcdG1wXHBocEFGNEIudG1w" alt="" style='background-color: black; height: 500px;'>
</body>
</html>

