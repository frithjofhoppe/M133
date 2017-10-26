<?php

$entry = $_GET['p1'];
$result = "fr";

if($entry == "1")
{
  $result = "de";
}
else
{
  $result = "en";
}

echo $result;

?>
