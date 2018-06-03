// 取得したAPI Keyを文字列として定義
const API_KEY = "853595dafb5bd7741172c7c11b604980"

// イベントハンドラを設定
// inputのtextではなく、form全体をイベントに設定
$(function() {
  $("#weather-form").on("submit", function(e) {
    // ユーザーの入力値の取得
    var cityName = $(this).find("#weather-form-city").prop("value");
    // ドキュメントを参照に、渡し方をきちんと指定
    // 文字列の結合は『+』が必要
    $.ajax("http://api.openweathermap.org/data/2.5/weather?APPID="+ API_KEY + "&q=" + cityName)
    // $.ajax("http://api.openweathermap.org/data/2.5/weather?APPID=<API Key>&q=<都市名>")
      // 通信成功時の処理
      // 処理後に『;』があるとエラーとなった
      .done(function(data) {
        $("#form-error").css("display", "none");
        $("#result-city-name").text(data.name);
        $("#result-temp").text(Math.round(data.main.temp - 273));
        $("#result-weather").text(data.weather[0].main);
        $("#result-datetime").text(Date(data.dt));
        $("#form-result").css("display", "block");
      })
      // 通信失敗時の処理
      .fail(function(data) {
        $("#form-spinner").css("display", "none");
        alert("Something wrong occurred.");
      });
    e.preventDefault();
  });
});
