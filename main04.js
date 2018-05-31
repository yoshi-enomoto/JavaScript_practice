$(function() {
  // クリック時にイベント発火
  $("#title").on("click", function() {
    console.log("クリックされました");
  });

// HTML要素の非表示/表示
  // hideボタン押下
  $("#hideButton").on("click", function() {
    $("#sub").hide();
    $("p").fadeOut(1000);
  });
  // showボタン押下
  $("#showButton").on("click", function() {
    $("#sub").show();
    $("p").fadeIn(1000);
  });

  // fade outボタンを押したとき
  $("#fadeOutButton").on("click", function() {
    $("#title").fadeOut(1000);
  });
  // fade inボタンを押したとき
  $("#fadeInButton").on("click", function() {
    $("#title").fadeIn(3000);
  });

// html要素の追加/削除
  // appendボタン押下
  // シングルとダブルを区別する（'、"）
  $("#appendButton").on("click", function() {
    console.log("appendButton");
    $("#lists").append('<li class="list">追加されたリスト</li>');
  });
  // removeボタン押下
  $("#removeButton").on("click", function() {
    $(".list").remove();
  });

// html要素のクラス追加/削除
  // add classボタン押下
  $("#addClassButton").on("click", function() {
    $("p").addClass("red");
  });
  // remove classボタン押下
  $("#removeClassButton").on("click",function() {
    $("p").removeClass("red");
  });

// html要素のクラス追加/削除
  // get attrボタン押下
  $("#getAttrButton").on("click", function() {
    console.log($("img").attr("src"));
  });
  // change attrボタン押下
  $("#changeAttrButton").on("click", function() {
    $("img").attr("src", "https://aiko.com/_shared/img/discography/15036_01.jpg");
    // $("img").attr("src", "");
  });

// フォームの値を取得
  $("#valButton").on("click", function() {
    console.log($("input").val());
  });

});
