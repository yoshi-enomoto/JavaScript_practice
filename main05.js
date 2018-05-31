var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

// 問題1の回答
$(function() {
  $("#submit").on("click", function() {
    var input = $("#keyword").val();
    // 問題2の回答
    for (var i = 0; i < fruits.length; i++ ) {
      if (fruits[i] == input ) {
        $("#result").text(input);
      }
    }
    // 問題2の模範解答
    // 『$.each()』配列の要素一つずつを取り出して何らかの処理をする
    // 処理の引数には、要素番号と配列の要素が入る（=function関数）
    $.each(fruits, function(i, fruit) {
      // 厳密等価演算子
      if (input === fruit) {
        $("#result").text(input);
        // 一致するものが見つかったらそのあとは繰り返さなくて良いので『false』を返す。
        return false;
      }
    });


  });


})
