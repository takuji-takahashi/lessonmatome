'use strict'


let start = document.getElementById('start');
let stop = document.getElementById('stop');
let result = document.getElementById('result');
let startTime;
let isStarted = false;

//アロー関数だとthisが使えない
start.addEventListener('click', function () {
    if (isStarted === true) {
        return;
    }
    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    //クリックしたらpushedのクラスができる
    stop.className = '';
    //startを押したらpushedが外れる

    result.textContent = '0.000';
    result.className = 'standby';
});

//アロー関数だとthisが使えない
stop.addEventListener('click', function () {
    let elapsedTime, diff;
    if (isStarted === false) {
        return;
    }
    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3);
    this.className = "pushed";
    sart.className = "";
    result.className = "";
    //stopを押したらpushedが外れる
    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {
        result.className = 'perfect';
    }
});
