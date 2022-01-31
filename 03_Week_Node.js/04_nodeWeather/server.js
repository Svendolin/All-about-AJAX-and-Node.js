/* 
Immer zuerst dieses Grundgerüst aufbauen und testen, ob es geht:

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('App Works! :D')
})

app.listen(3000, () => {
  console.log('Server is running at http://127.0.0.1:3000')
})

DANN bauen wir es so auf: <3
*/




const request = require('request')
const express = require('express')
const bodyParser = require('body-parser') // Genau so bennen wie das Paket im node_modules-Order heisst

const app = express()
// Aus https://home.openweathermap.org/api_keys
const apiKey = '0c7dde231eb74971c4123abf8d7d04fd'

app.use(express.static('public'))
// Erlaubt uns, den Post Parameter zu lesen
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// Renderprozess GET
app.get('/', (req, res) => {
  // res.send('App Works! :D')
  res.render('index.ejs', {
    data: null, //Null wenn keine Data mitgeschickt wird
    error: null
  })
})

// Renderprozess POST (userprozess wird angezeigt, d.h der User kann mit ZURICH etwas anfangen)
app.post('/', (req, res) => {
  const city = req.body.city
  //  Kopert aus: https://openweathermap.org/current
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
  // Die Request testen mit einer Fetch-Request (Mit Request Library - $ npm i request)
  request(url, (err, response, body) => {  // Fehler, Antwort, Inhalt
    if (err) {
      console.log(err)
      res.render('index.ejs', {
        data: null,
        error: 'Could not connect to thr wetaher API!'
      })
    } else { // Falls kein Error, dann wollen wir den Body sehen
      const weatherData = JSON.parse(body)
      // console.log(weatherData)

      if (weatherData.cod == 404) {
        res.render('index.ejs', {
          data: null,    
          error: 'Your city does not exist!'
        })
      } else {

        const data = {
          temp: weatherData.main.temp,
          city: city,
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon
        }
        // console.log(weatherData)
        // Daten mitgeben (aus dem Terminal gelesen, wenn 1x zurich erfolgreich im Input eingegeben wurde):
        res.render('index.ejs', {
          data: data,
          error: null
        })
      }
    }
  })
})

app.listen(3000, () => {
  console.log('Server is running at http://127.0.0.1:3000')
})