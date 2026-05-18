console.log('Happy developing ✨')

"use strict"

function showTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
 
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    let inhalt = hours + ":" + minutes + ":" + seconds;

    // 1. Das Element suchen
    let uhrElement = document.getElementById("Uhrzeit");
    
    // 2. Sicherheits-Check: Nur wenn das Element EXISTIERT, Text einfügen
    if (uhrElement) {
        uhrElement.innerHTML = inhalt;
    }
    // Wenn es null ist (wie auf dieser Seite), passiert einfach gar nichts 
    // und das Skript läuft ohne Fehler weiter!
}
    

showTime();
setInterval(showTime, 1000);

let fivefeetapart = {
      Titel: "Five Feet Apart",
      Autor: "Rachael Lippincott",
      Genre: "Romance",
      Seiten: "304 Seiten",
      Verlag: "Simon & Schuster"
};

console.log(fivefeetapart);



function renderBookCard(buch) {

      const container = document.getElementById("daten-container");

      const htmlKonstrukt = 
      '<article class="book-card">\n' + 
      '    <h2 class="book-title">' + buch.Titel + '</h2>\n' + 
      '    <div class="book-details">\n' +
      '        <p><strong>Autor:</strong> ' + buch.Autor + '</p>\n' +
      '        <p><strong>Genre:</strong> ' + buch.Genre + '</p>\n' +
      '        <p><strong>Seiten:</strong> ' + buch.Seiten + '</p>\n' + 
      '        <p><strong>Verlag:</strong> ' + buch.Verlag + '</p>\n' +
      '    </div>\n' +
      '</article>';

      container.innerHTML = htmlKonstrukt;
}

renderBookCard(fivefeetapart);
