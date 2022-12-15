var ctx = document.getElementById("myRadarChart1");

var myRadarChart = new Chart(ctx, {
  //グラフの種類
  type: 'radar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["HTML", "CSS", "SASS", "TailwindCss", "JavaScript"],
      //データセット
      datasets: [
          {
              label: "FRONTEND",
              //背景色
              // backgroundColor: "rgba(200,112,126,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              pointHoverBorderColor: "rgba(200,112,126,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [4,3,4,4,4]
          }
      ]
  },
 options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      ticks: {
        // 最小値の値を0指定
        beginAtZero:true,
        min: 0,
        // 最大値を指定
        max: 5,
      }
    }
  }
});
var ctx = document.getElementById("myRadarChart2");

var myRadarChart = new Chart(ctx, {
  //グラフの種類
  type: 'radar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["Go", "SQL", "Java", "C", "PHP"],
      //データセット
      datasets: [
          {
              label: "BACKEND",
              //背景色
              backgroundColor: "rgba(200,112,126,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              pointHoverBorderColor: "rgba(200,112,126,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [4,3,4,4,4]
          }
      ]
  },
 options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      ticks: {
        // 最小値の値を0指定
        beginAtZero:true,
        min: 0,
        // 最大値を指定
        max: 5,
      }
    }
  }
});
var ctx = document.getElementById("myRadarChart3");

var myRadarChart = new Chart(ctx, {
  //グラフの種類
  type: 'radar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["Python", "React", "TypeScript", "Swift", "Linux"],
      //データセット
      datasets: [
          {
              label: "OTHERS",
              //背景色
              backgroundColor: "rgba(200,112,126,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              pointHoverBorderColor: "rgba(200,112,126,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [4,3,4,4,4]
          }
      ]
  },
 options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      ticks: {
        // 最小値の値を0指定
        beginAtZero:true,
        min: 0,
        // 最大値を指定
        max: 5,
      }
    }
  }
});
