// 取得したAPI Keyを文字列として定義
const API_KEY = "853595dafb5bd7741172c7c11b604980"

// イベントハンドラを設定
// inputのtextではなく、form全体をイベントに設定
$(function() {
  $("#weather-form").on("submit", function(e) {
    e.preventDefault();
  });
});
