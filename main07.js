var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

// 問題5のポイントについて
// ①. splitを使って文字列から配列を作成する
// ②. mapを使って要素を加工した新しい配列を作成する
// ③. joinを使って|で配列の要素をつないだ正規表現を作成する


$(function() {
  var list = $("#list");

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  // map引数で渡す関数の追加
  function editElement(element) {
    var result = "^" + element;
    return result;
  }

  // 本処理
  $("#submit").on("click", function() {
    var input = $("#keyword").val();
    // 問題5-①：配列の作成
    var inputs = input.split(" ");
    // 問題5-②：さらに加工して配列を作成
    // 引数で、要素の頭に『^』を付ける関数を渡す。
    var newInputs = inputs.map(editElement);
    // 問題5-③：配列の要素をさらに加工して配列を作成
    var reg = RegExp(newInputs.join("|"))

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});
