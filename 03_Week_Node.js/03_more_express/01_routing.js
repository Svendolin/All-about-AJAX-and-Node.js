/* Package "routing.js" führt er das viel effizienter aus (3 Schritte statt 5), so gehts: */

// 1) Pakete holen:
const experess = require('express') // Liest den Express Ordner
const app = experess()

// 2.1) Routing bauen für HAUPTSEITE (ROUTE). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/', (req, res) => {  // '/' = root
  res.send('Accessed to the main page')
})

// 2.2) GET-Routing bauen für ABOUT SEITE (/about). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/about', (req, res) => {  // '/about' = about
  res.send('The about page has been accessed')
})

// 2.3) GET-Routing bauen für ABOUT SVEN SEITE (/about/sven). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/about/sven', (req, res) => {  // '/about/sven' = about/sven
  res.send('This is me, Sven :D')
})

// 2.4) POST-Routing bauen für ABOUT SVEN SEITE (/about/sven). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.post('/about/sven', (req, res) => {  // '/about/sven' = about/sven
  res.send('This is not going to appear') // Weil nur GET-Request zur URL führt
})

// 3) Wenn der Server eine Request kriegt, hat er "zugehört"
app.listen(3000, ()=> { // 3000 = port
  console.log('app is listening on http://127.0.0.1:3000')
})