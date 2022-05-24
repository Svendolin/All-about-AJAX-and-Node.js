<?php // Logout
session_start(); // Session initialisieren

// logout
setcookie(session_name(), null, -1, '/');
session_destroy();
session_write_close();

// auf Login umleiten
header('Location: login.php');
exit;
