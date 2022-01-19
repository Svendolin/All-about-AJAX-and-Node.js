$.getJSON('https://jsonplaceholder.typicode.com/users', data => {  // Die 10 User aus der AIP laden
console.log(data)

  $.each(data, function(i, person) {
  console.log(person)
  const template = `
  <div class="card">
        <img width="100" height="100" src="https://robohash.org/${person.username}?set=set4" alt="Avatar of person" class="avatar">
        <p>${person.username}</p>
        <hr>
        <ul>
          <li>Name: ${person.name}</li>
          <li>Email: ${person.email}</li>
          <li>City: ${person.address.city}</li>
          <li><a href="http://${person.website}">${person.company.name}</a></li>
          <li></li>
        </ul>
      </div>
  `
  $('.container').append(template)
  })
})