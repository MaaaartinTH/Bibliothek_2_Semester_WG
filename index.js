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
