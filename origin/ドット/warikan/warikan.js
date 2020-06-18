'use strict'

//DOM
const price = document.getElementById('price');
const num = document.getElementById('num');
const unit = document.getElementById('unit');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

function checkInput() {
    // /^[1-9][0-9]*$/
    if (price.value.match(/^[1-9][0-9]*$/) !== null &&
        num.value.match(/^[1-9][0-9]*$/) !== null
    ) {
        btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
}

btn.addEventListener('click', function () {
    let payLess, short, payMore, over, str;
    if (this.classList.contains('disabled') === true) {
        return;
    }
    //A.300(payLess)...100(short)不足
    //B.400(payMore)...200(over)余り
    // payLess = 1000 / 3; //333.333....
    // payLess = 1000 / 3 /100;//333.333....

    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
    short = price.value - (payLess * num.value);
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    over = Math.abs(price.value - (payMore * num.value));
    if (over === 0 && short === 0) {
        str = '一人' + (price.value / num.value) + '円ちょうどです！';
    } else {
        str =
            '一人' + payLess + '円だと' + short + '足りません。' +
            '一人' + payMore + '円だと' + over + '円余ります。';
    }
    result.textContent = str;
    reset.classList.remove('hidden');
});

price.addEventListener('keyup', checkInput);
num.addEventListener('keyup', checkInput);

reset.addEventListener('click', function () {
    result.textContent = 'ここに結果を表示します';
    price.value = '';
    num.value = '';
    unit.value = 100;
    btn.classList.add('disabled');
    this.classList.add('hidden');
    price.focus();

});
price.focus();