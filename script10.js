$(function() {
  var card = $(".card");
  card.on("click", function() {
  // 『this』によるイベント発生元の取得
  // console.log(this);
    var img = $(this).find("img");
    img.css("opacity", "0.5");
  });
});
