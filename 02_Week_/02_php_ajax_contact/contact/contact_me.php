<?php 

// Prüfen, ob Felder leer sind (ist 'name' nicht angekommen? empty?)

if (empty($_POST['name'])){
  echo 'invalid Name';
  return false;
}


$name = strip_tags(htmlspecialchars($_POST['name']));
// Nutze "name", um die Email an die korrekte Person zu senden

echo 'Email has been sent';

?>