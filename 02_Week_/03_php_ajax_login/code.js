document.querySelector('#loginForm').addEventListener('submit', function (e){
  e.preventDefault()

  const fd = new FormData(document.querySelector('#loginForm'))
  // console.log(fd)

  sendData (fd)
  
})

async function sendData (fd) {

  const response = await fetch('login.php', { method : 'POST', body : fd})
  const data = await  response.json()

  console.log(data) 
}
