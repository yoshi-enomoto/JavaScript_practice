$(function() {
  // 対象の要素の親要素を取得
  $("#parent_target").parent().css("background-color", "red");

  // 対象の要素の子要素について、引数で指定されている子要素を取得。（引数必須っぽい）
  $("#find").find("#find_target").css("background-color", "blue");

  // 対象の要素の兄弟要素について取得。引数指定がある場合は引数の要素に一致するもの。
  $("#siblings_target").siblings().css("background-color", "green");

  // 対象の要素の次の要素を取得。兄弟がいる場合に取得可能。いない場合は対象外。
  $("#next_target").next().css("background-color", "yellow");
});
