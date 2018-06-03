$(function() {
  // ブラウザ履歴がある場合に実行可能
  $(".back").click(function() {
    window.history.back();
  });

  // ブラウザ履歴がある場合に実行可能
  $(".forward").click(function() {
    window.history.forward();
  });

  // // 上記２つの別解
  // // （backとforwardを一つの配列に格納し、『forEach』を使うことで繰り返しの処理を行う）
  // ["back", "forward"].forEach(function(type) {
  //   $("." + type).click(function() {
  //     window.history[type]();
  //   });
  // });

  // 同期通信での個別のリンク設定
  $(".index21").click(function() {
    window.location = "./index21.html";
  });

  $(".index22").click(function() {
    window.location = "./index22.html";
  });

  $(".index23").click(function() {
    window.location = "./index23.html";
  });

  // // 上記３つの別解
  // var buttons = $("ol li button");
  // for (var i = 0; i < buttons.length; i++) {
  //   var button = $(buttons[i]);
  //   // console.log(button);
  //   // console.log(buttons[i]);
  //   button.click(function() {
  //     // 押されたもののclassを取得。
  //     window.location ="./" + $(this).attr("class") + ".html";
  //   });
  // }
});
