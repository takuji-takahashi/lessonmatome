'use strict'

//DOM
const comment = document.getElementById('comment');
const label = document.getElementById('label');

const LIMIT = 500;
const WARNING = 10;

label.innerHTML = LIMIT;

comment.addEventListener('keyup', function () {

    let remaining = LIMIT - this.value.length;
    label.innerHTML = remaining;
    // if (remaining < WARNING) {
    //     label.className = 'warning';
    // } else {
    //     label.className = '';
    // }
    label.className = remaining < WARNING ? 'warning' : '';
});

