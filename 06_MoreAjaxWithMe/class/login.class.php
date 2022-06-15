

<?php

// Login Calass for userlogin

class UserLogin extends PDO
{


  // Constructor
  // DB Connection
  public function __construct($host, $user, $passwd, $dbname)
  {
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8';

    // Array für Optionen für PDO anlegen
    $options = array(
      // Wir wollen in der Testphase wissen, ob es Fehler gibt.
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      // Mit dieser Option werden die Resultate in Form von assoziativen Arrays retour kommen.
      // In den meisten Fällen ist das der effizienteste Weg, die Resultate in HTML auszugeben ...
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    );
    try {
      // Konstruktor der PDO-Klasse (Superklasse) aufrufen
      parent::__construct($dsn, $user, $passwd, $options);
    } catch (PDOException $e) {
      die("Verbindung zur Datenbank fehlgeschlagen: " . $e->getMessage());
    }
  }



  // check if user is valid and log in if user password is true
  public function checkUser($username, $password)
  {
    $query = "SELECT * FROM login WHERE username = :username";
    $stmt = $this->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $result = $stmt->fetch();
    // User wird nicht gefunden - result = false
    if ($result) { // user gefunden
      // check PW
      if (password_verify($password, $result['password'])) {
        $_SESSION['loginstate'] = "eingeloggt";
        $_SESSION['username'] = $username;
        // Alles ist OK, leite weiter ...
        header('Location: private/display.php');
      } else {
        return "Falsches Passwort";
      }
    } else {
      return "Kann diesen User nicht finden.";
    }
  }
}





?>