
// 1) Pakete holen:
const experess = require('express') // Liest den Express Ordner
const app = experess()

// 2) Middleware = Zwischenschritt-Objekt (req-Objekt benutzen), das von Funktion zur Funktion weitergegeben wird
let requestTime = function (req, res, next) {
  req.requestTime = Date.now() //JS-Funktion was ein Timestamp gibt (Wir speichern in dieser Middleware die Zeit rein)
  next() // Schliesst unser middleware ab
}

// 3) Der Applikation mitteilen, dass requestTime Teil des Ganzen ist und die req-property
app.use(requestTime)

// 4) Routing bauen für HAUPTSEITE (ROUTE). Anfrage und Antwort: (Statuscode, Typ und Inhalt schicken)
app.get('/', (req, res) => {  // '/' = root
  let repsonseText = `<h1>Hello User!</h1><br><small>You logged in at: ${req.requestTime} </small>`
  res.send(repsonseText)
})

// 5) Wenn der Server eine Request kriegt, hat er "zugehört"
app.listen(3000, ()=> { // 3000 = port
  console.log('app is listening on http://127.0.0.1:3000')
})