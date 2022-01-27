
// 1) Pakete holen:
const experess = require('express') // Liest den Express Ordner
const app = experess()

// 2) Definieren, dass ejs die view engine ist:
app.set('view engine', 'ejs')

// 3.1) Routing bauen für HAUPTSEITE (ROUTE). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/', (req, res) => {  // '/' = root

  let students = [
    {name: 'Sven' , note: '1'},
    {name: 'Nicole' , note: '1'},
    {name: 'Carlo' , note: '2'},
  ]

  let message = 'Express is very simple and has many happy users :D'


  res.render('index.ejs', {  // .render statt .send, um eine Seite (als HTML) zu rendern statt nur Text zu schreiben
      students: students,
      message: message
  }) 
}) 

/*
IMPORTANT NOTE: 
"views"-Ordner erstellen, der MUSS so heissen um ejs-Files darstellen zu können ! (Siehe expressjs.com Seite)
"partials"-Ordner erstellen, der MUSS so heissen um ejs-Files zu INCLUDIEREN
*/

// 3.2) Routing bauen für ABOUT (ROUTE). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/about', (req, res) => {  // '/about' = about
  res.render('about.ejs') // .render statt .send, um eine Seite (als HTML) zu rendern statt nur Text zu schreiben
}) 

// 4) Wenn der Server eine Request kriegt, hat er "zugehört"
app.listen(3000, ()=> { // 3000 = port
  console.log('app is listening on http://127.0.0.1:3000')
})