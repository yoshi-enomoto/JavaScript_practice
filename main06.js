var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  // 問題4の解答
  var list = $("#list");

  // 関数：一致する要素がある・なしの場合の処理
  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  // 本処理
  $("#submit").on("click", function() {
    var input = $("#keyword").val();
    // 正規表現の追加：RegExpオブジェクト
    // 先頭が『input』で始まるという意味になる（引数）
    var reg = new RegExp("^" + input);

    // 2回目以降の検索時処理（前の検索結果を削除する為）
    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      // 配列要素に一致するものがあるか調べる。
      if (fruit.match(reg)) {
        // 関数の呼び出し（検索結果の差し込み）
        appendList(fruit);
      }
    });

    // クラスセレクタが一つも無い場合は、入力された値に一致する要素が無いことになる。
    if ($(".list").length === 0) {
      // 関数の呼び出し（検索結果の差し込み：該当無し）
      appendList("一致する果物はありませんでした");
    }
  });
});
