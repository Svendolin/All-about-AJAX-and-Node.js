<!DOCTYPE html>
<html lang="en">
<?php
session_start();

// includes
require_once('config.php');
// class
require_once('class/login.class.php');

// neue login instanz vorbereiten + db verbindung 
$instanz = new UserLogin($host, $user, $passwd, $dbname);

// wenn gesendet
if (isset($_POST['submit'])) {

  // eingaben clean
  $username = trim(strip_tags($_POST['username']));
  $password = trim(strip_tags($_POST['password']));

  // check required fields
  if (empty($username) || empty($password)) {
    $userFeedback = 'Bitte fülle alle Felder aus.';
  } else {
    // check user data
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
    <!-- Displa Usermessages -->
    <div class="user-msg">
      <p><?php echo $userFeedback ?></p>
    </div>
    <form class="login-form" method="post">
      <h2>Log in to the system</h2>
      <label for="username">Username</label>
      <input id="username" type="text" name="username" value="">
      <label for="password">Password</label>
      <input id="password" type="password" name="password" value="">
      <input type="submit" name="submit" value="Go!"></input>
    </form>
  </div>
</body>

</html>