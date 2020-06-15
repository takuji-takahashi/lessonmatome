'use strict'
window.onload = function () {
    var now = null, max = 100, input_area = document.getElementById("text_area"),
        output_area = document.getElementById("text_length");

    input_area.onkeyup = function () {
        now = (max - input_area.value.length);
        output_area.innerHTML = now;
        output_area.className = (now < 0) ? "out" : "";
    }
}