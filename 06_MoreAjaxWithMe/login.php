<!DOCTYPE html>
<html lang="en">
<?php
session_start();

// includes (configuration to server)
require_once('config.php');
// class (extende PDO class)
require_once('class/login.class.php');

// neue login instanz vorbereiten + db verbindung 
$instanz = new UserLogin($host, $user, $passwd, $dbname);

// Wichtig: wenn gesendet...
if (isset($_POST['submit'])) {

  // Eingaben clean (trim() und strip_tags() als Vorsichtsmassname
  $username = trim(strip_tags($_POST['username']));
  $password = trim(strip_tags($_POST['password']));

  // Check required fields
  if (empty($username) || empty($password)) {
    $userFeedback = 'Bitte fülle alle Felder aus.';
  } else {
    // Check user data
    $userFeedback = $instanz->checkUser($username, $password);
  }
} else {
  $userFeedback = '';
}

?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="login-wrapper">
    <!-- Display Usermessages -->
    <div class="user-msg">
      <p><?php echo $userFeedback ?></p>
    </div>
    <form class="login-form" method="post">
      <h2>Log in to the system</h2>
      <p>PHP-Files: Please copy the whole folder to htdocs <br> of your XAMPP / MAMP for display</p>
      <label for="username">Username</label>
      <input id="username" type="text" name="username" value="">
      <label for="password">Password</label>
      <input id="password" type="password" name="password" value="">
      <input type="submit" name="submit" value="Go!"></input>
    </form>
  </div>
</body>

</html>