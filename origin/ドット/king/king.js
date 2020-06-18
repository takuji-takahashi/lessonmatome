'use strict'
function kingSaid() {
    let orders = [
        'デコピン',
        'クイズを出して',
        'ほめちぎる',
        'ドリンクを注ぎなさい',
    ];
    let order = orders[Math.floor(Math.random() * orders.length)];

    //命令
    let num = document.getElementById('num').value;
    let p1 = Math.floor(Math.random() * (num)) + 1;
    let p2;

    if (num < 2) {
        p2 = 1;
    } else {
        do {
            p2 = Math.floor(Math.random() * (num)) + 1;
        } while (p1 === p2);
    }
    document.getElementById('result').innerHTML =
        '#' + p1 + 'の人が#' + p2 + 'の人に' + order;
}