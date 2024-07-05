let startTime;
let elapsedTime = 0;
let timerInterval;

document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('pauseButton').addEventListener('click', pauseStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);
document.getElementById('lapButton').addEventListener('click', recordLapTime);

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimeDisplay, 10); // update every 10 milliseconds
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimeDisplay();
    document.getElementById('laps').innerHTML = '';
}

function recordLapTime() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
}

function updateTimeDisplay() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
    return ('0' + number).slice(-length);
}
