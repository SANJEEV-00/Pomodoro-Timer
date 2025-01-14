let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let time = 25 * 60; // 25 minutes in seconds
let timerInterval;

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 25 * 60;
    updateTimer();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimer();
