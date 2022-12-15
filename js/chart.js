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
              backgroundColor: "rgba(0,153,255,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              borderWidth: "1.5px",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              // pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              // pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [5,4,3,2,4],
          }
      ]
  },
options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      r: {// この部分うまくいかない 直しが必要!!!!!!!
        grid: {
          color: "#fff",
        },
        pointLabels: {
          color: "black",
        },
      },
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
      labels: ["Go", "Python", "SQL", "PHP", "Java"],
      //データセット
      datasets: [
          {
              label: "BACKEND",
              //背景色
              backgroundColor: "rgba(0,153,255,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              borderWidth: "1.5px",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              // pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              // pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [2,3,3,2,1],
          }
      ]
  },
options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      r: {// この部分うまくいかない 直しが必要!!!!!!!
        grid: {
          color: "#fff",
        },
        pointLabels: {
          color: "#fff",
        },
      },
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
      labels: ["React", "TypeScript", "C", "Swift", "Linux"],
      //データセット
      datasets: [
          {
              label: "OTHERS",
              //背景色
              backgroundColor: "rgba(0,153,255,0.5)",
              //枠線の色
              borderColor: "#3CB9FC",
              borderWidth: "1.5px",
              //結合点の背景色
              pointBackgroundColor: "#8A2EBD",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバ時）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバー時）
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [4,1,2,1,3],
          }
      ]
  },
options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      r: {// この部分うまくいかない 直しが必要!!!!!!!
        grid: {
          color: "#fff",
        },
        pointLabels: {
          color: "#fff",
        },
      },
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
