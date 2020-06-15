'use strict'

//DOM
const timeElm = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const refresh = document.getElementById('refresh');

//instance
let elapsed = 0;
let intervalId = null;

//ミリと文字列のメソッド
function updateTime() {
    const hour = Math.floor(elapsed / (1000 * 60 * 60));
    const min = Math.floor(elapsed / (1000 * 60)) % 60;
    const sec = Math.floor(elapsed / 1000) % 60;
    const Ms = elapsed % 1000;

    const h = hour.toString().padStart(2, '0');
    const m = min.toString().padStart(2, '0');
    const s = sec.toString().padStart(2, '0');
    const ms = Ms.toString().padStart(3, '0');

    timeElm.innerHTML = `${h}:${m}:${s}.${ms}`;
}

//イベント
start.addEventListener('click', () => {
    if (intervalId !== null) { return };
    let pre = new Date();
    intervalId = setInterval(() => {
        const now = new Date();
        elapsed += now - pre;
        pre = now;

        updateTime();
    }, 10);
});

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;

});

refresh.addEventListener('click', () => {
    elapsed = 0;
    updateTime();
});


DOM設定をして
初期化のインスタンスとelapsed0を定義


// ミリの設定と文字列化のメソッド作成
// const hour = Math.floor(elapsed / (1000 * 60 * 60));
// const ms = elapsed % 1000;
// const hStrings = hour.toString().padStart(2, '0');


// HTMLに表示させる

// イベントは
// クリック連打防止

// 過去の時間設定pre
// 初期化の変数に現在の時刻を設定してsetInterval
// 現在から過去を引いてカウントに加える
// もう一度過去に現在を入れる
// ストップをクリックする動作の引数に初期化
// clearIntarval（intervalId）と
// もう一度初期化にnullを入れる
// intarvalにnull

// カウント0
// 秒メソッド
