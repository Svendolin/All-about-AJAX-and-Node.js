getData()
$('.refresh').click(function (e){
  $('.punchline').hide()
  getData()
})

function getData() {
  $.getJSON('https://icanhazdadjoke.com/', data => {
      
      $('.setup').html(data.joke.replace('? ', '?<br>'))
      $('.punchline').slideDown('slow')

    }) 
}