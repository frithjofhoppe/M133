<html>
  <head>
    <meta lang="<?php $ch = curl_init(); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL,'http://127.0.0.1/M133/Auftrag07/get1.php?p1=1');
    $content = curl_exec($ch);
    echo $content;
    ?>">
  </head>
  <body>
    <form action="result.php" method="POST">
      An:<input name="mail" type="text"><br>
      Subj:<input name="subj" type="text"><br>
      Text:<textarea name="text"> </textarea>
      <input type="submit">
    </form>
    <?php
        $var1 = "test";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL,'http://127.0.0.1/M133/Auftrag07/get1.php?p1=5');
        $content = curl_exec($ch);
        echo $content;
    ?>
  </body>
</html>
