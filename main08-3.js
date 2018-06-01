var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

// 問題6のポイントについて
// ①. 値が入力される度に配列から一致する要素がないか検索
// ②. 文字を入力しないキーを押した時は処理を実行しないようにする
// ③. 入力された値が削除されてなくなった時に要素が表示されないようにする


$(function() {
  var list = $("#list");
  // ②変数『preWord』の定義
  var preWord;

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    var result = "^" + element;
    return result;
  }

  // 本処理
  // ①イベント発火を『keyup』に変更。
  $("#keyword").on("keyup", function() {
  // $("#submit").on("click", function() {
    var input = $("#keyword").val();
    var inputs = input.split(" ");
    var newInputs = inputs.map(editElement);
    // var reg = RegExp(newInputs.join("|"))
    // ②変数『word』の定義
    var word = newInputs.join("|");
    var reg = RegExp(word)


    $(".list").remove();

    // ③『input.lenght !== 0』を追加する。（入力文字数が0文字でなければ）
    if (word != preWord && input.length !== 0) {
      // // ②前回の処理で使用した正規表現作文字列と今回の正規表現文字列の比較
      // // 一致していなければfruits配列との比較を行わない
      // // コンソールで見ると矢印キーなどは入力すると『^』と表される為、前回と今回とで判別がつく。
      // if (word != preWord) {
      $.each(fruits, function(i, fruit) {
        if (fruit.match(reg)) {
          appendList(fruit);
        }
      });

      if ($(".list").length === 0) {
        appendList("一致する果物はありませんでした");
      }
    // ②今回の処理で使用した正規表現文字列を格納
    }
    preWord = word;
  });
});
