<?php

  $txtBenutzername = $_POST['txtBenutzername'];
  $txtBenutzervorname = $_POST['txtBenutzervorname'];
  $txtBenutzeradresse = $_POST['txtBenutzeradresse'];
  $txtPasswort = $_POST['txtPasswort'];

  function setPassword(&$pwIn)
  {
      $len = strlen($pwIn);
      if($len > 5)
      {
          $pwIn = substr($pwIn,0,4);
          echo "true";
      }
      echo "something";
      $pwIn = $pwIn . "********";
  }

  setPassword($txtPasswort);

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
