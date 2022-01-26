/* Package "Express.js" führt er das viel effizienter aus (3 Schritte statt 5), so gehts: */

// 1) Pakete holen:
const experess = require('express') // Liest den Express Ordner
const app = experess()

// 2) Routing bauen. Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/', (req, res) => {  // '/' = root
  res.send('Hello Express')
})

// 3) Wenn der Server eine Request kriegt, hat er "zugehört"
app.listen(3000, ()=> {
  console.log('app is listening on http://127.0.0.1:3000')
})