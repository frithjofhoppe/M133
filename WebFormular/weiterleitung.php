<?php

  $txtBenutzername = $_POST['txtBenutzername'];
  $txtBenutzervorname = $_POST['txtBenutzervorname'];
  $txtBenutzeradresse = $_POST['txtBenutzeradresse'];
  $txtPasswort = $_POST['txtPasswort'];

  $strUsernameLength = strlen($txtBenutzername);

  function withoutSpace(&$input)
  {
      $input = str_replace(' ','',$input);
  }

  function replace2($strValue,$strNew, &$input)
  {
    $input = str_replace($strValue,$strNew,$input);
  }

  function toUpper(&$input)
  {
      $input =strtoupper($input);
  }

  function onlyAscii(&$input)
  {
    echo "true";
    $charArray = str_split($input);
    $back = [];

    foreach($charArray as $char)
    {
      if(ord($char) <= 127)
      {
        array_push($back,$char);
      }
    }
    $input = implode("",$back);
  }

  toUpper($txtBenutzername);
  withoutSpace($txtPassword);
  replace2("@","[at]",$txtBenutzeradresse);
  onlyAscii($txtBenutzername);

  echo "Eingegebene Daten";
  echo "<table>";
  echo "<tr>";
    echo "<td>Vorname</td>";
    echo "<td>Username</td>";
    echo "<td>Adresse</td>";
    echo "<td>Passwort</td>";
  echo "</tr>";
  echo "<tr>";
    echo "<td>$txtBenutzervorname</td>";
    echo "<td>$txtBenutzername</td>";
    echo "<td>$txtBenutzeradresse</td>";
    echo "<td>$txtPasswort</td>";
  echo "</tr>";
  echo "</table>";

?>
