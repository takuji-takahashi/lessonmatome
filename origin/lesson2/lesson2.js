
'use strict'

//DOM
const tkz = document.getElementById('tkz');
const mih = document.getElementById('mih');


//定義＆読み込み
addEventListener('load', () => {

    //インスタンス
    let greeting = "おはようございます、";

    let famiry = {
        member: [
            { name: "高橋卓士", height: 173, weight: 65 },
            { name: "田中美帆", height: 160, weight: 55 }
        ],
    }
    // let bmi = menubar.weight / (menubar.height / 100) ** 2;

    //生成
    tkz.innerHTML = "<p>" + greeting + famiry.member[0].name + "さん。" + "</p>";
    mih.innerHTML = "<p>" + greeting + famiry.member[1].name + "さん。" + "</p>";

}); //load

//文字が行で表示できない

// export default famiry;
//他のファイルに渡す