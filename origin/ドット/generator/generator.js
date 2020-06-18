'use strict'

//DOM
let slider = document.getElementById('slider');
let label = document.getElementById('label');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');


//event

function getPassword() {
    let seed_letters = 'abcdefghijklmnopqrstuvwxyz';
    let seed_numbers = '0123456789';
    let seed_symbols = '!#$%&()';
    let seed;

    let len = slider.value;
    let pwd = '';

    seed = seed_letters + seed_letters.toUpperCase();
    if (numbers.checked === true) {
        seed += seed_numbers;
    }
    if (symbols.checked) {
        seed += seed_symbols;
    }

    // for (let i = 0; i < len; i++) {
    //     pwd += seed[Math.floor(Math.random() * seed.length)];

    // }
    while (len--) {
        pwd += seed[Math.floor(Math.random() * seed.length)];
    }

    result.value = pwd;
}

slider.addEventListener('change', function () {
    label.innerHTML = this.value;
});

btn.addEventListener('click', function () {
    getPassword();
    //result.value = 'adgkogo5515a';
});

result.addEventListener('click', function () {
    this.select();
});

getPassword();