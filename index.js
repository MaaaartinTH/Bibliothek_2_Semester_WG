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

/*let books = [
  {
      Bild: "Media/FiveFeetApart.jpg",
      Titel: "Five Feet Apart",
      Autor: "Rachael Lippincott",
      Genre: "Romance",
      Seiten: "304 Seiten",
      Verlag: "Simon & Schuster"
  },
  {
      Bild: "Media/TheVegetarian.jpg",
      Titel: "The Vegetarian",
      Autor: "Han Kang",
      Genre: "Fiction",
      Seiten: "288 Seiten",
      Verlag: "Hogarth Press"
  },
   {
      Bild: "Media/DieSchoensteVersion.jpeg",
      Titel: "Die schönste Version",
      Autor: "Ruth-Maria Thomans",
      Genre: "Roman",
      Seiten: "272 Seiten",
      Verlag: "Rowohlt Taschenbuch"
  },

  

];
console.log(books);*/



function renderBookCard(buch) {

      const container = document.getElementById("daten-container");

      if (!container) {
        return; 
    }

      const htmlKonstrukt = 
      '<article class="book-card">\n' +
      '    <img src="' + buch.Bild + '" alt="Cover von ' + buch.Titel + '" class="book-cover">\n' +
      '    <h2 class="book-title">' + buch.Titel + '</h2>\n' + 
      '    <div class="book-details">\n' +
      '        <p><strong>Autor:</strong> ' + buch.Autor + '</p>\n' +
      '        <p><strong>Genre:</strong> ' + buch.Genre + '</p>\n' +
      '        <p><strong>Seiten:</strong> ' + buch.Seiten + '</p>\n' + 
      '        <p><strong>Verlag:</strong> ' + buch.Verlag + '</p>\n' +
      '    </div>\n' +
      '</article>';

      container.innerHTML += htmlKonstrukt;
}

/*books.forEach(function(einzelnesBuch){
    renderBookCard(einzelnesBuch);
});*/

function loadBookFromJSON(){

    fetch('books.json')
    
    .then(function(response) {
        if(!response.ok) {
            throw new Error('Fehler beim Laden der JSON-Datei');
        }
        return response.json();

    })
    .then(function(geladeneBuecher) {

        geladeneBuecher.forEach(function(einzelnesBuch) {
            renderBookCard(einzelnesBuch);
        });
    })
    .catch(function(error) {
        console.error('Fehler', error);
    });

}

window.addEventListener('DOMContentLoaded', loadBookFromJSON);



// dom holen
const bookForm = document.getElementById('book_form');

// SICHERHEITS-CHECK: Nur Event-Listener hinzufügen, wenn das Formular da ist!
if (bookForm) {
    bookForm.addEventListener('submit', function(event){
        event.preventDefault();

        const titleValue = document.getElementById('book_title').value;
        const genreValue = document.getElementById('book_genre').value;
        const pagesValue = document.getElementById('book_pages').value;
        const authorValue = document.getElementById('book_author').value;
        const publisherValue = document.getElementById('book_publisher').value;

        const newBook = {
            Bild: "Media/book_cover_placeholder.png", // Platzhalter hinzufügen, damit kein Fehler entsteht
            Titel: titleValue,
            Autor: authorValue,
            Genre: genreValue,
            Seiten: pagesValue + " Seiten",
            Verlag: publisherValue
        };

        // Das wird jetzt nur auf der Seite klappen, wo auch der Daten-Container ist.
        // Wenn du die Daten seitenübergreifend speichern willst, müsstest du 
        // mit dem "LocalStorage" des Browsers arbeiten.
        renderBookCard(newBook);
     
        bookForm.reset();
    });

}