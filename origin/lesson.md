1.おみくじを作ろう
------------------------------------------
大吉の確立を上げよう 0.05/0.5/それ以外
------------------------------------------


3. class/BMI関数/eat関数/run関数
------------------------------------------
高橋、おはよう
身長は173cm
体重は65kg
あなたのBMIは21.7です。
高橋、さようなら

高橋はごはんを食べる
5kg増えました。

田中はごはんを食べる
3kg増えました。

BMIの求め方= weight / (height / 100) ** 2;
------------------------------------------

4.if() else()
------------------------------------------
10才以上20未満の場合は10代、
20才以上30未満の場合は20代、
30才以上40未満の場合は30代、
これらの条件に合致しない場合しないものはそれ以外と表示させる。
変数には10,21,32,43,5を代入して実行結果が予想通りになるか試す。
------------------------------------------

5.for文
------------------------------------------
1～10まで1ずつふやしていく繰り返しを記述して
if文を使い、3になったらスキップ、
7になったらfor文が終わる記述をしましょう。
またその動きが分かるようにカウンタ変数を表示
------------------------------------------

6.関数
------------------------------------------
3つの引数を渡せるcalという関数を作成。
この3つの変数の足し算の結果を変数に渡して表示。
引数に10,5,8を渡して関数を実行
------------------------------------------

7.Student-クラス/name-プロパティ/cal_avg-メソッド/judge-メソッド
------------------------------------------
satoさんの5教科の平均点を計算して(合計点/教科数)
平均点60点以上なら合格passed
平均点以下なら不合格failed
点数70,65,50,90,30data
教科数
名前a001
平均点avg
判定結果を表示
------------------------------------------

const breakfast = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("卵");
    }, 100);
});

breakfast
    .then(data => {
        console.log(data);
        return `${data} ベーコン`;
    })
    .then(data => {
        console.log(data);
        return `${data} 卵`;
    })
    .then(data => {
        console.log(`${data} できあがり。`);
    });
------------------------------------------
//const promise = Promise.resolve("");
//promise
//.then(data =>{
//console.log("成功しました。",data);
//});

//Promise.resolve("");を使うことで
//new Promise((resolve, reject) => {を省くことができる
//Promise.reject("");も同じ

// const breakfast = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("卵");
//     }, 100);
// });

// breakfast
//     .then(data => {
//         console.log(data);
//         return `${data} ベーコン`;
//     })
//     .then(data => {
//         console.log(data);
//         return `${data} 卵`;
//     })
//     .then(data => {
//         console.log(`${data} できあがり。`);
//     });

// const usagi = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("うさぎのタイムは100ms"), 100);
// });

// const kame = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("かめのタイムは300ms"), 300);
// });

//早いほうを先に出すときは
//Promise.race
// Promise.all([usagi, kame]).then(result => {
//     const [usagiTime, kameTime] = result;
//     console.log(usagiTime);
//     console.log(kameTime);
// });
//-------------------------------------------------------------
//配列の数字を自分同士で足す　//結果[2,4,6]
// console.log(Array.from([1, 2, 3], (i) => {
//     return i * 2;
// }));

//配列arrayの中で、最初に2で割り切れるもの を見つけてその要素を返す
// const array = [1, 2, 3, 4, 5];
// const result = array.find((element, index) => {
//     console.log(`index ${index} => ${element}`);
//     return element % 2 === 0;
// });
// console.log(result);

//配列arrayの中で、最初に2で割り切れるもの を見つけてそのインデックスを返す。
// const array = [1, 2, 3, 4, 5];
// const result = array.findIndex((element, index) => {
//     console.log(`index ${index} => ${element}`);
//     return element % 2 === 0;
// });
// console.log(result);


//object1を安全に複製してobject2を生成
// const object1 = {
//     model: "X-1976",
//     fuel: 100
// }

// const object2 = Object.assign({}, object1);
// console.log(object1 === object2);
// //でも同じものじゃない…




10.
------------------------------------------
表示された文字列の通りにテキストを正確に入力して、
制限時間内にどれだけ間違わずに文字入力できたかを判定するゲームになります。

・HTMLを用意しよう
・問題文
const textList = [
        'Hello World',
        'Good',
        'I love JavaScript',
        'This is MyApp',
        'Welcome'
];

・問題文をランダムに表示しよう
・初期化処理（init）を作ろう
そこにランダム問題文を処理を入れる
form.input.value = '';
form.input.focus();

・フォーム処理を組み立てよう
・カウントダウン機能を作ろう
・タイピング結果を表示しよう
・ゲームの終了処理を作ろう
------------------------------------------


8.色々
------------------------------------------
・配列宣言方法
・配列にデータを追加する関数は
・オブジェクト宣言方法
・オブジェクトのプロパティから値を取得する(例name)
・数値を文字列に変換するための関数
・文字列を数値に変換するための関数(加算する式を)


引数valueが3で割り切れる場合は、
そのままvalueを出力するそれ以外はnullを出力する。
function output(value)


関数に引数を渡す
関数は呼び出された時に値が渡されてくると、引数に順に値が代入されます。
よって関数定義側では引数の箇所に渡されてきた値を代入するための変数を記述します。
------------------------------------------
//var array1=[];
//var array2=[];

// var a1 = array1.every(v => {
//     return v % 2 === 0;
// });

//要素のいずれかが偶数であることを 検証してみましょう
//var array1=[];
//var array2=[];
//var a1=array1.some(isEven);
//var a2=array2.some(isEven);

//各要素の合計値を計算してみましょう。
//var array=[];
// var a = array.reduce((a,b)=> {
//     return a+b;
//});

//各要素の文字数の合計値を計算してみましょう。
//var array=[];
// var a = array.reduce((a,b)=> {
//     return a+b.length;
//},0);



------------------------------------------
生徒がsatoさん以外の複数いる想定をする。
また、名前以外の要素もあるので、
classを使用してconstructorで定義をする。

平均点を計算する関数を作成
引数にはdataを入れる。
for文を使用して教科の数を加算していき、
加算した教科の値とと配列の数を割って平均点を出して
avg変数にその値を返す。

合否をジャッジする関数を作成
引数にはavgを入れる
if文を使用して
平均点が60点以上であればpassed
それ以外ならfailedとして
変数のresultに代入して返す

最後にクラスを定義をする。
名前
点数
平均点(クラスを入れたプロパティも入れる)
ジャッジ結果(クラスを入れたプロパティも入れる)
を変数に代入して
教科数
名前a001
平均点
合否を表示する。
------------------------------------------