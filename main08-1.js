var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

// 問題6のポイントについて
// ①. 値が入力される度に配列から一致する要素がないか検索


$(function() {
  var list = $("#list");

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
