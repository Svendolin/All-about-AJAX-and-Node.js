<?php 

// Prüfen, ob Felder leer sind (ist 'name' nicht angekommen? empty?)

if (
  empty($_POST['name']) ||
  empty($_POST['email']) || 
  empty($_POST['message']) ||
  !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
){
  echo json_encode(array('fail', 'invalid inputs')); // json_encode = Um in der Array mit JSON zu schreiben
  return false;
}


$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
// Nutze "info", um die Email an die korrekte Person zu senden
// PLACEHOLDER - REPLACE ME

// $to = 'admin@contactme.com';
// $email_subject = 'Contact form - ' . $name . ' - contactme.com website';
// $email_body = 'You have received a message from: ' . $name . 'with this email: ' . $email . 'and this is the message: ' . $message;
// $headers = 'From: admin@contactme.com\n';
// $header .= 'Reply-To:' . $email; // .= bedeutet: zusammenführen
// mail($to, $email_subject, $email_body, $headers);

echo json_encode(array('success', 'Thank you' . $name . ', your message has been sent! :)'));

?>

