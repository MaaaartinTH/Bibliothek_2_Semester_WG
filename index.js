console.log('Happy developing ✨')

"use strict"

function showTime(){
    let now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
 
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    let inhalt = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Uhrzeit").innerHTML = inhalt;
    
}

showTime();
setInterval(showTime, 1000);

let book_card = {
      Booktitle: "Five Feet Apart",
      Autor: "Rachael Lippincott",
      Genre: "Romance",
      Seiten: "304 Seiten",
      Verlag: "Simon & Schuster"
};

console.log(book_card);

