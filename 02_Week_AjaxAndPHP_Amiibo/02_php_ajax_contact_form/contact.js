// Funktion des Formulars zusprechen, sobald submit geklickt wurde:
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()

  // Siehe im MDN was FormData kann
  const fd = new FormData(document.querySelector('form'));
  // console.log(fd);

  sendData (fd)

})

async function sendData (fd) {

  const response = await fetch('contact_me.php', { method : 'POST' , body : fd})
  const data = await response.text() //response.text()
  console.log(data[0]) // fail || Success

  if (data[0] == 'fail'){
    document.querySelector('form').append(data[1])
  } else if (data[0] == 'success'){
    document.querySelector('body').append(data[1])
  }
}

 