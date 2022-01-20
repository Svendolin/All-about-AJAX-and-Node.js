// Click event des .do-buttons um die Funktion unten auszuführen:
document.querySelector('.do').addEventListener('click', getData)

async function getData() {
  // console.log('the function is running');

  const response = await fetch('send_data.txt'); // Ansonsten send_text.php, wir arbeiten aber nicht im Localhost
  const data = await response.text(); // Vergiss NICHT den await (da async)
  console.log(data);
}