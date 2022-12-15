var ctx = document.getElementById("myRadarChart");

var myRadarChart = new Chart(ctx, {
  //グラフの種類
  type: 'radar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["総合評価", "評価１", "評価２", "評価３", "評価４"],
      //データセット
      datasets: [
          {
              label: "sample",
              //背景色
              backgroundColor: "rgba(200,112,126,0.5)",
              //枠線の色
              borderColor: "rgba(200,112,126,1)",
              //結合点の背景色
              pointBackgroundColor: "rgba(200,112,126,1)",
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
