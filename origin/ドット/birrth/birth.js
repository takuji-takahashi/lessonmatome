'use strict'

function getAge() {

    //入力値の取得
    let birthday = document.getElementById('birthday').value.split("-");
    //日付オブジェクトの作成
    let d1 = new Date(birthday[0], birthday[1] - 1, birthday[2]);
    let d2 = new Date();
    //日数、年齢の計算
    let diff = d2.getTime() - d1.getTime();
    let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
    let age = Math.floor(daysPast / 365.25);
    //結果の表示
    document.getElementById('daysPast').innerHTML = daysPast;
    document.getElementById('age').innerHTML = age;
}

// function getAge() {

//     let birthday = document.getElementById('birthday').value;
//     //let d1 = new Date(birthday);
//     let birthdayArray = birthday.split("-");
//     let year = birthdayArray[0];
//     let month = birthdayArray[1] - 1; //月(0-11)
//     let day = birthdayArray[2];
//     let d1 = new Date(year, month, day);
//     let d2 = new Date();
//     let diff = d2.getTime() - d1.getTime();
//     let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
//     //alert(dayPast + '日経過');
//     let age = Math.floor(daysPast / 365.25);
//     document.getElementById('daysPast').innerHTML = daysPast;
//     document.getElementById('age').innerHTML = age;
// }