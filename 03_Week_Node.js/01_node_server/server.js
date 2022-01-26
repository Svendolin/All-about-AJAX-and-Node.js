// NPM = Paketverwaltung, z.B HTTP-Paket (was uns einfache Requests erlaubt)
/* Das unten ist wieder Vanilla - Package "Express.js" führt das sonst automatisch aus */

// 1) Pakete holen:
const http = require('http') // require gibts nur serverseitig mit NODE.JS. Mit require holen wir nur die Pakete, die wir brauchen

// 2) Hostname definieren
const hostname = '127.0.0.1' // = 'Localhost'

// 3) Eintrittspunkt
const port = 3000

// 4) Server starten: (Statuscode, Typ und Inhalt schicken)
const server = http.createServer( (req, res) => { // (param) {statement}
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}) 

// 5) Wenn der Server eine Request kriegt, hat er "zugehört"
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})

// 6) Prüfen in Terminal mit "node server.js"
// 7) Request zeigen im Browser mit http://127.0.0.1:3000/ in der URL von Chrome z.B
// 8) ctrl c im Terminal beendet den Serverdurchlauf. Bei einem Refresh ist http://127.0.0.1:3000/ nicht mehr erreichbar
// 9) Mit "node server.js" starten wir den Server wieder