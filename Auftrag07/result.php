<?php
  $an = $_POST['mail'];
  $subj = $_POST['subj'];
  $text = $_POST['text'];

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_URL,"'http://frithjofhome.synology.me/sendmail.php?to='.'$an&subject=$subj&body=$text'");
  $content = curl_exec($ch);
  echo $content;

 ?>
