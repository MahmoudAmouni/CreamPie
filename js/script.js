function updateClockAndDate() {
    let now = new Date();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    document.getElementById('clock').innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[now.getMonth()];
    let day = now.getDate();
    let year = now.getFullYear();
    document.getElementById('date').innerHTML = month + ' ' + day + ', ' + year;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}


setInterval(updateClockAndDate, 1000);


updateClockAndDate();






