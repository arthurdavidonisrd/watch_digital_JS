
function attClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const  seconds = now.getSeconds();
    const timeShow = `${hours}:${minutes}:${seconds}`;

    const watch = document.getElementById("clock").textContent = timeShow;


}


attClock();
setInterval(attClock, 1000);