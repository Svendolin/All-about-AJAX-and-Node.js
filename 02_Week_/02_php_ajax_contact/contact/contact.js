// Funktion des Formulars zusprechen, sobald submit geklickt wurde:
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()

  // Siehe im MDN was FormData kann
  const fd = new FormData(document.querySelector('form'));
  // console.log(fd);

  fetch('contact_me.php', {  // GET alleine bringt nichts, wir müssen eine POST-method beifügen. {} = Einstellungen der Request NEU nötig, ansonsten bleibt es beim GET
    method : 'POST',
    body : fd
  })
  .then(response => {
    response.text()
    .then(data => {
      console.log(data)
    })
  })
})

