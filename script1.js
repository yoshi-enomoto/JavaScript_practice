const API_KEY = "853595dafb5bd7741172c7c11b604980"

// 1.絶対零度と摂氏零度の差を定数代入
const ABS_TMP_DIEF = 273;

$(function() {
  // 複数回利用するDOM要素を変数代入
  var formSpinner = $("#form-spinner");
  var formError = $("#form-error");
  var formResult = $("#form-result");

  $("#weather-form").on("submit", function(e) {
    //
    formSpinner.css("display", "inline");
    // ユーザーの入力値の取得
    var cityName = $(this).find("#weather-form-city").prop("value");
    // 変数化（?以降は順不同でOK。&で繋ぐことで付加可能）
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    requestUrl += cityName + "&APPID=" + API_KEY;
    $.ajax(requestUrl)
    // $.ajax("http://api.openweathermap.org/data/2.5/weather?APPID="+ API_KEY + "&q=" + cityName)
      // 通信成功時の処理
      .done(function(data) {
        //  条件文追加
        // DOM要素を変数代入しているものを置き換え
        if (data.cod == 200) {
          formSpinner.css("display", "none");
          formError.css("display", "none");
          // $("#form-error").css("display", "none");
          $("#result-city-name").text(data.name);
          $("#result-temp").text(Math.round(data.main.temp - 273));
          $("#result-weather").text(data.weather[0].main);
          $("#result-datetime").text(Date(data.dt));
          // $("#form-result").css("display", "block");
          formResult.css("display", "block");
        } else {
          formSpinner.css("display", "none");
          formError.css("display", "none");
          formResult.css("display", "block");
        }
      })
      // 通信失敗時の処理
      .fail(function(data) {
        // $("#form-spinner").css("display", "none");
        formSpinner.css("display", "none");
        alert("Something wrong occurred.");
      });
    e.preventDefault();
  });
});
