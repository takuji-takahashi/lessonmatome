'use strict'

//DOM
const timer = document.getElementById('timer');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const reset = document.getElementById('reset');
const start = document.getElementById('start');

// timeLeft = TimeToCountDown-elapsedTime

//定義
let startTime, timeLeft, elapsedTime;
let timeToCountDown = 0;
let timerId;
let isRunning = false;

//アップデート
function updateTimer(t) {
    let d = new Date(t);
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let timerString;
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timerString = m + ':' + s + '.' + ms;
    timer.textContent = timerString;
    document.title = timerString;
}

//カウントダウン
function countDown() {
    timerId = setTimeout(function () {
        timeLeft = timeToCountDown - (Date.now() - startTime);
        if (timeLeft < 0) {
            isRunning = false;
            start.textContent = 'Start';
            clearTimeout(timerId);
            timeLeft = 0;
            timeToCountDown = 0;
            updateTimer(timeLeft);
            return;
        }
        updateTimer(timeLeft);
        countDown();
    }, 10);
}

//startClick
start.addEventListener('click', function () {
    if (isRunning === false) {
        isRunning = true;
        start.textContent = 'Stop';
        startTime = Date.now();
        countDown();
    } else {
        isRunning = false;
        start.textContent = 'Start';
        timeToCountDown = timeLeft;
        clearTimeout(timerId);
    }

});

//minClick
min.addEventListener('click', function () {
    if (isRunning === true) {
        return;
    }
    timeToCountDown += 60 * 1000;
    if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
});

//secClick
sec.addEventListener('click', function () {
    if (isRunning === true) {
        return;
    }
    timeToCountDown += 1000;
    if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
});

//resetClick
reset.addEventListener('click', function () {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
});



