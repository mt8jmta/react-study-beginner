/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);
// // varは上書き、再宣言可能
// val1 = "var変数上書き後";
// console.log(val1);
// var val1 = "var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // letは上書き可能、再宣言不可能
// val2 = "let変数上書き後";
// console.log(val2);
// // constは上書き＆再宣言不可能
// const val3 = "const変数";
// console.log(val3);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "rou",
//   age: 5,
// };
// console.log(val4);
// val4.age = 100;
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "rou";
// const age = 100;

// // 私の名前はrouです。年齢は100歳です。
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の方法
// function func1(str) {
//   return `${str}です。`;
// }
// console.log(func1("func1"));

// // アロー関数
// const func2 = (str) => {
//   return `${str}だぜ。`;
// };
// console.log(func2("func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 3));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "rou",
//   age: 100,
// };
// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const myProfileList = ["rou", 100];
// const message5 = `私の名前は${myProfileList[0]}です。年齢は${myProfileList[1]}歳です。`;
// console.log(message5);

// const [name, age ] = myProfileList;
// const message6 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message6);

// /**
//  * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん。`);
// sayHello("rou");
// sayHello();

// /**
//  * スプレッド構文
//  */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const addFunc = (num1, num2) => console.log(num1 + num2);
// addFunc(arr1[0], arr1[1]);
// addFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// // const arr8 = arr4;とすると参照渡しの問題で値の変更によるバグの原因となる。
// arr4.push(100);
// console.log(arr4);
// console.log(arr7);

// /**
//  * mapやfilterを使用した配列の処理
//  */
const nameArr = ["山田", "佐藤", "自分", "鈴木"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, i) => {
//   console.log(`${i + 1}番目は${name}です。`);
// });

// const numArr = [1, 2, 3, 4, 5, 6, 7];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "自分") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// /**
//  * 三項演算子
//  */
// // ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? "trueです" : `falseです`;
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const isInRange = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です";
// };
// console.log(isInRange(30, 500));

// /**
//  * 論理演算子の本当の意味を知ろう && ||
//  */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// // || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました。";
// console.log(fee2);
