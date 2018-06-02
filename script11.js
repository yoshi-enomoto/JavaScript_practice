$(function() {
  $("form").on("submit",function(e) {
    var output ="";
    var checkboxes = $(this).find('input[type="checkbox"]');

    for (var i =0; i < checkboxes.length; i++) {
      // 要素一つずつを変数代入？
      var checkbox = $(checkboxes[i]);
      // 『checked』となっているもののみ『true』となる。
      // 『true』の時のみ、条件式を実行！
      console.log(checkbox.attr("value"));
      if (checkbox.prop("checked")) {
        // 『.attr("value")』でvalueの属性値を取得。
        output += checkbox.attr("value") + "\n";
      }
    }
    alert("あなたが選んだ果実:\n" + output);

    // アクションをキャンセルするメソッド。
    e.preventDefault();
  });
});
