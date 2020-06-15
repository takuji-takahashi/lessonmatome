'use strict'

// 10才以上20未満の場合は10代、
// 20才以上30未満の場合は20代、
// 30才以上40未満の場合は30代、
// これらの条件に合致しない場合しないものはそれ以外と表示させる。
// 変数には10,21,32,43,5を代入して実行結果が予想通りになるか試す。

// let num = [10, 21, 32, 43, 5];
// let age = num[4];

// if (age >= 10 && age < 20) {
//     console.log("10代です。");
// } else if (age >= 20 && age < 30) {
//     console.log("20代です。");
// } else if (age >= 30 && age < 40) {
//     console.log("30代です。");
// } else {
//     console.log("それ以外です。");
// }

// 1～10まで1ずつふやしていく繰り返しを記述して
// if文を使い、3になったらスキップ、
// 7になったらfor文が終わる記述をしましょう。
// またその動きが分かるようにカウンタ変数を表示

// for (let i = 1; i < 10; i++) {
//     if(i ===3){
//         continue;
//     }else if(i===7){
//         break;
//     }else{
//         console.log(i);
//     }
// }

// 3つの引数を渡せるcalという関数を作成。
// この3つの変数の足し算の結果を変数に渡して表示。
// 引数に10,5,8を渡して関数を実行

// function cal(x, y, z) {
//     return x + y + z;
// }
// console.log(cal(10, 5, 8));

// satoさんの5教科の平均点を計算して(合計点/教科数)
// 平均点60点以上なら合格passed
// 平均点以下なら不合格failed
// 点数70,65,50,90,30data
// 教科数
// 名前a001
// 平均点avg
// 判定結果を表示

//Object

let member = {
    name: ["sato"],
    data: [70, 65, 50, 90, 30],

    //平均点メソッド
    avg: () => {
        var data = [70, 65, 50, 90, 30];
        var sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        var avg = sum / data.length;
        return avg;
    },


    //ジャッジメソッド
    judge: () => {
        var result;
        var avg = member.avg();
        if (avg > 60) {
            result = "passed";
        } else {
            result = "failed";
        }
        return result;
    },
};

console.log(member.data.length);
console.log(member.name[0]);
console.log(member.avg());
console.log(member.judge());

//class

// class Member {
//     constructor(name) {
//         this.name = name;
//     }
//     cal_avg(data) {
//         var sum = 0;
//         for (let i = 0; i < data.length; i++) {
//             sum += data[i];
//         }
//         var avg = sum / data.length;
//         return avg;
//     }

//     judge(avg) {
//         var result;
//         if (avg > 60) {
//             result = "passed";
//         } else {
//             result = "failed";
//         }
//         return result;
//     }
// }

// var data = [70, 65, 50, 90, 30];
// var a001 = new Member("sato");
// var avg = a001.cal_avg(data);
// var result = a001.judge(avg);

// console.log(data.length);
// console.log(a001.name);
// console.log(avg);
// console.log(result);

//タイピングゲーム
//DOM
// const subject = document.getElementById('subject');
// const timer = document.getElementById('timer');


