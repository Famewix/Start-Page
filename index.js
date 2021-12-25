const hourE = document.querySelector('.hour');
const minuteE = document.querySelector('.minute');
const secondE = document.querySelector('.second');

function changeTime() {
    var d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    
    hourE.innerHTML = hour
    minuteE.innerHTML = minute
    secondE.innerHTML = second
    // console.log(hour, minute, second)
}

changeTime()

setInterval(changeTime, 1000)