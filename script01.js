// ページを開いた時に、ウィンドウを表示させる。
window.alert('ようこそ、JavaScriptの世界');

// ブラウザのコンソールにテキストを表示させる。
console.log('ようこそ、JavaScriptの世界');

// 基本的な『for』文
for (var i = 0; i < 10; i = i + 1){
  console.log(i);
}

function square(num1) {
  return num1 * num1;
  // 『num1 * num1』だけでは値が返されない。（ruby関数とは異なる）
}
console.log(square(3)); // コンソールに9が表示される
