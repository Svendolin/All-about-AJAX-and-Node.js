<!DOCTYPE html>
<html lang="en">
<?php
session_start();

// session check
if (isset($_SESSION['loginstate']) && $_SESSION['loginstate'] == "eingeloggt") {
  $username = $_SESSION['username'];
} else {
  // Umleitung auf Login-Formular wenn nicht eingeloggt
  header('Location: ../login.php');
}
?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Display Data</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <div class="wrapper-main">
    <h1>You are loged in as: <?= $username ?></h1>
    <div class="button-container">
      <button class="student">Students</button>
      <button class="teacher">Teachers</button>
    </div>
    <table class="display-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        <tr>
      </thead>
      <tbody class="table-body">

      </tbody>
      <tfoot>

      </tfoot>
    </table>
    <a href="../logout.php" class="logout">Logout</a>
  </div>
  <!----------------- Time for the IMPORTANT part ----------------->
  <script>
    // JS to get and display data
    async function getdata(userType) {

      // remove all old items if there are any
      let table = document.querySelector(".table-body");
      empty(table);

      // get new data
      let response = await fetch('../api/data.json');
      let data = await response.json();

      // console.log(userType);

      // filter for desired data
      let filter = data.filter(element => element.type == userType);
      // console.log(filter)

      //  prepare object and display in table
      filter.forEach((e) => {
        let userObj = ` <tr>
          <td>${e.name}</td>
          <td>${e.username}</td>
          <td>${e.email}</td>
          <td>${e.phone}</td>
        </tr>`

        // add objects to dom
        document
          .querySelector(".table-body")
          .insertAdjacentHTML("afterbegin", userObj);
      })
    }

    document.querySelector('.student').addEventListener('click', () => {
      getdata('student')
    })

    document.querySelector('.teacher').addEventListener('click', () => {
      getdata('teacher')
    })

    function empty(e) {
      while (e.firstElementChild) {
        e.firstElementChild.remove();
      }
    }
  </script>

</body>

</html>