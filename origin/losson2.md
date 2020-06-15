class JankenHand {
    constructor(char) {
        this.char = char;
    }

    toString() {
        return this.char;
    }

    static fromInt(index) {
        switch (index) {
            case 0:
                return JankenHandEnum.Rock;
                break;
            case 1:
                return JankenHandEnum.Scissors;
                break;
            case 2:
                return JankenHandEnum.Paper;
                break;
            default:
                throw new Error("indexが不正です。" + index);
        }
    }

    winTo(hisHand) {
        switch (this) {
            case JankenHandEnum.Rock:
                return hisHand === JankenHandEnum.Scissors;
                break;
            case JankenHandEnum.Scissors:
                return hisHand === JankenHandEnum.Paper;
                break;
            case JankenHandEnum.Paper:
                return hisHand === JankenHandEnum.Rock;
                break;
            default:
                throw new Error("hisHandが不正です。" + hisHand);
        }
    }

    loseTo(hisHand) {
        return this !== hisHand && !this.winTo(hisHand);
    }
}

const JankenHandEnum = {};
JankenHandEnum.Rock = new JankenHand("✊");
JankenHandEnum.Scissors = new JankenHand("✌");
JankenHandEnum.Paper = new JankenHand("✋");

console.log("じゃんけん", JankenHandEnum.Rock, JankenHandEnum.Scissors, JankenHandEnum.Paper);

// -----------------------------------

class JankenStrategy {
    nextHand() {
        // なにもしない
    }

    prevHands() {
        // なにもしない
    }
}

class RandomStrategy extends JankenStrategy {
    nextHand() {
        // じゃんけんは3パターンなので、[0−2]の範囲でランダムな値を返すようにする
        const index = Math.round(Math.random() * 2);
        return JankenHand.fromInt(index);
    }
}

class FixedHandStrategy extends JankenStrategy {
    constructor(hand) {
        super();
        this.hand = hand;
    }

    nextHand() {
        // いつも決まった手を返すようにする
        return this.hand;
    }
}

class ChottoKashikoiStrategy extends JankenStrategy {
    prevHands(myHand, hisHand) {
        this.myHand = myHand;
        this.hisHand = hisHand;
    }

    nextHand() {
        // 初回は前回の手がないためランダムとする
        if (!this.myHand || !this.hisHand) {
            return new RandomStrategy().nextHand();
        }

        if (this.myHand.winTo(this.hisHand)) {
            // 自分が勝った場合は、同じ手を使う
            return this.myHand;
        } else if (this.myHand.loseTo(this.hisHand)) {
            // あいてが勝った場合は、あいての手を使う
            return this.hisHand;
        } else {
            return new RandomStrategy().nextHand();
        }
    }
}

// -----------------------------------

class Player {
    constructor(name, strategy = new RandomStrategy()) {
        this.name = name;
        this.strategy = strategy;
    }

    getName() {
        return this.name;
    }

    nextHand() {
        return this.strategy.nextHand();
    }

    prevHands(myHand, hisHand) {
        this.strategy.prevHands(myHand, hisHand);
    }
}

// -----------------------------------

const player1 = new Player("Taro");
const player2 = new Player("Hanako", new ChottoKashikoiStrategy());

let player1Win = 0;
let player2Win = 0;

// 10回じゃんけんをする
for (let i = 0; i < 10; i++) {
    const hand1 = player1.nextHand();
    const hand2 = player2.nextHand();

    const result = hand1.winTo(hand2) ? "勝ち" : hand1.loseTo(hand2) ? "負け" : "あいこ";

    if (hand1.winTo(hand2)) {
        player1Win++;
    }

    if (hand1.loseTo(hand2)) {
        player2Win++;
    }

    // 前の手を覚えておく
    player1.prevHands(hand1, hand2);
    player2.prevHands(hand2, hand1);

    // ここで結果を出力する
    console.log(player1.getName(), hand1, " - ", hand2, player2.getName(), result);
}

const finalResult = player1Win > player2Win ? `${player1.getName()}の勝ち` :
    player1Win < player2Win ? `${player2.getName()}の勝ち` : "引き分け";

// ここで最終結果を出力する
console.log(player1Win, " - ", player2Win, finalResult);

------------------------------------------
指定した長さまでの要素を配列として返す関数createSeqArray(n)を実装してください。
1から与えられた引数nで指定された値までの数値を要素として持つ配列を返します
引数が0以下の場合は空の配列を返すものとします
実行例

- createSeqArray(1) -> [1]
- createSeqArray(3) -> [1, 2, 3]
- createSeqArray(5) -> [1, 2, 3, 4, 5]
------------------------------------------

要素の位置を取得する関数findIndexOfStr()を実装してください。
この関数は以下の2つの引数を取ります
- `array` - 文字列の配列
- `str` - 検索文字列
与えられた配列arrayの中からstrを部分文字列として持つ最初の要素のインデックスを返します
ただし、arrayの中に該当する要素が見つからなかった場合は-1を返します
実行例

- findIndexOfStr(["abc", "def", "ghi"], "e") -> 1
- findIndexOfStr(["Alice", "Bob", "Charles"], "a") -> 2
- findIndexOfStr([], "a") -> -1
------------------------------------------
与えられた配列の要素を偶数のみにフィルタする関数filterEven()を実装してください。
この関数は整数を要素として持つ配列arrayを引数として取り、そこから奇数を取り除いた偶数のみの配列を返します
なお、この関数では常に新しい配列を返し、元の配列の内容を変更してはいけません
実行例

- filterEven([1, 2, 3, 4, 5]) -> [2, 4]
- filterEven([10, 25, 37, 42, 54]) -> [10, 42, 54]
- filterEven([3, 5, 7]) -> []

------------------------------------------
この関数は整数を要素として持つ配列arrayを引数として取り、その各要素の値を2倍にした値を要素として持つ配列を返します
なお、この関数では常に新しい配列を返し、元の配列の内容を変更してはいけません。
------------------------------------------
この関数は文字列を要素として持つ配列arrayを引数にとり、その配列自体をソートする関数です
ソート条件は以下のとおりです
文字列の長さが長い順
文字列の長さが同じ場合は辞書順
なお、この関数では返り値は返しても返さなくても構いません
ソートは引数の配列自体に対して行うようにしてください
------------------------------------------
この関数では返り値は返しても返さなくても構いません
要素の削除は引数の配列自体に対して行ってください
------------------------------------------
隣り合う整数の和を間に挿入する関数addSumToMiddle()を実装してください。

この関数は整数を要素として持つ配列arrayを引数にとり、その配列の隣り合う要素の合計値を、それぞれ要素の間に挿入します
この関数では返り値は返しても返さなくても構いません
要素の挿入は引数の配列自体に対して行ってください
------------------------------------------
------------------------------------------
------------------------------------------
















------------------------------------------
function createSeqArray(n){
if(n <=0){
    return [];
}
let result=[];
for(let i =0; i<n; i++){
result.push(i+1);
}
return result;
}
------------------------------------------
function findIndexOfStr(array, str) {
    var a = array.findIndex(v => {
        return v.indexOf(str) !== -1;
    });
    return a;
}
------------------------------------------
function filterEven(array){
let result = array.filter(v => {
    return v % 2 === 0;
});
return result;
}
------------------------------------------
function toDouble(array){
let result = array.map(v => {
    return v * 2 ;
});
return result;
}
------------------------------------------
function sortByLength(array){
let result = array.sort((a,b) => {
    return a.length > b.length ? -1:1;
});
return result;
}
------------------------------------------
function removeOdd(array){
let result = array.findIndex((v => {
    return v %2 ===1;
});
while(a !== -1){
    array.splice(a,1)
    a=array.findIndex(v =>{
        return v %2===1;
    });
}
}
------------------------------------------
function addSumToMiddle(array) {
    let array2 = array.slice();
    for (var i = 1; i < array2.length; i++) {
        array.splice(2 * i - 1, 0, array2[i] + array2[i - 1]);
    }
}
------------------------------------------
function makePrimeArray(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    //every()メソッドは、空の配列ではあらゆる条件式に対して true を返す
    let result = primes.every(p => {
      return i % p !== 0;
    });
    if (result) primes.push(i);
  }
    return primes;
}
------------------------------------------
------------------------------------------
------------------------------------------
------------------------------------------