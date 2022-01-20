// TODO:
// 1) Wenn die Seite geklickt / geladen wird, soll eine Request zu dieser Amiibo-API gemacht werden, um alle Amiibos zu kriegen
// 2) Da "defer" = Es wird kein ONLOAD gebraucht


getData() // Funktion callen! IMMER MACHEN
async function getData() {
  // Endpoint für alle Gameseries (Spielereihen)
  const url_gameseries = 'https://www.amiiboapi.com/api/gameseries' // await fetch('https://www.amiiboapi.com/api/gameseries') wäre der direkte Fetch
  const response = await fetch(url_gameseries)
  const data = await response.json() // Daten als json statt text zurückkriegen 
  // console.log(data)
  showGames(data) // WICHTIG (const begrenzt data in dieser Funktion, an diesem Scope) = Wird callen HIER showGames-Funktion und können "data" übergeben
}


function showGames (data) {
  const names = []
  data.amiibo.forEach(game => {
    names.push(game.name) // push() = an einer array ganz am ENDE HINZUFÜGEN
  });

  // console.log(names)

  // X) Einzigartiges Namensset (da unter NAMES gewisse Namen doppelt vorkommen). Spreadoperator [...] und names neu überschreiben
  const uniqueNames = [...new Set(names)]
  // A) Durch alle Namen gehen bei jedem Spiel:
  uniqueNames.forEach(gameName => {
  // B) Liste <li> kreieren
  const li = document.createElement('li')
  // C) Der aktuelle Gamenamen zu der <li> als Inhalt hinzufügen
  li.innerText = gameName
  // D) Die jetzige <li> muss an der <ul> im HTML angehängt werden (appended)
  document.querySelector('.gameseries').appendChild(li)
  })

  getAmiibos() // Funktion bereits hier callen, um es hier zu inizialisieren...
}

function getAmiibos() {
  // A) Amiibos kriegen
  // B) Click event für die <li>

  const listItems = document.querySelectorAll('.gameseries > li') // gameseries > li = Sichere Methode, damit garantiert wird, dass nur die <li> in der Gameseries gewählt werden
  listItems.forEach(item => {
    item.addEventListener('click', async (e) => { // CLICK ist auch eine Funktion, so machen wir diese asynchron
      // console.log(item.innerText)

      const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${item.innerText}`)
      const data = await response.json()
      console.log(data)
    })
  })
}
