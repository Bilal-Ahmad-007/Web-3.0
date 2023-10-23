let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let hourHeading = document.getElementById("hour");
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");
let interval;

function StartTime() {
  msec++;
  msecHeading.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    msec = 0;
    if (sec >= 60) {
      min++;
      minHeading.innerHTML = min;
      sec = 0;
      if (min >= 60) {
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
      }
    }
  }
}
function start() {
  interval = setInterval(StartTime, 10);
}

function pause() {
  clearInterval(interval);
}
function Reset() {
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hourHeading.innerHTML=hour;
  minHeading.innerHTML=min;
  secHeading.innerHTML=sec;
  msecHeading.innerHTML=msec;
  pause();
  
}
