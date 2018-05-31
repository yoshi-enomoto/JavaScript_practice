// 問題：商品ごとの小計（金額×個数）が引数targetPriceを超えたもののみをコンソールに出力。

// 前提定義
var items = [
  { name: "ジャガイモ", price: 50, count: 3 },
  { name: "人参", price: 60, count: 1 },
  { name: "豚肉", price: 200, count: 1 },
  { name: "玉ねぎ", price: 50, count: 2 },
];

// 小計の高額な商品を出力する関数箇所
function higherPrice (targetPrice) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].price * items[i].count > targetPrice) {
      console.log(items[i].name);
    }
  }
}

// 自己流：変数に逐一代入せずに、そのまま用いれば良い！
// function higherPrice (targetPrice) {
//   for ( var i = 0; i < 4; i = i +1 ) {
//     var b = items[i].name;
//     var a = items[i].price * items[i].count;
//     if (a > targetPrice) {
//       console.log(b);
//     }
//   }
// }

// 呼び出し
higherPrice(120);



// ----下記、ベース-----
// var items = [
//   { name: 'じゃがいも', price: 50, count: 3 },
//   { name: 'にんじん', price: 60, count: 1 },
//   { name: '豚肉', price: 200, count: 1 },
//   { name: '玉ねぎ', price: 50, count: 2 }
// ];

// // targetPriceより小計の高額な商品を出力
// function higherPrice (targetPrice) {
//   // ここにソースコードを追記しましょう
// }

// higherPrice(120);

// ----考え方----
// １：配列の各要素を全て取得
// ２：各要素の小計を計算
// ３：targetPriceより小計が高額な場合、商品名を出力

// ----実際----
// １：配列の各要素を全て取得
  // for (var i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  // }
  // for文の繰り返す回数箇所は、『items.length』を使うことで拡張・保守性が上がる。
  // 『i = i + 1』は『i++』で賄える。
  // 『console.log(items[i]);』と書くことで、オブジェクトがそのまま出力される。

// ２：各要素の小計を計算
  //  console.log(items[i].price * items[i].count);
  // 計算結果が出力される。

// ３：targetPriceより小計が高額な場合、商品名を出力
  // if (items[i].price * items[i].count > targetPrice) {
  //   console.log(items[i].name);
  // }
  // 計算結果が引数より大きければ、true処理を行う箇所に『console.log(items[i].name』を記述
