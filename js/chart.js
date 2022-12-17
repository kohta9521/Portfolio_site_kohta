
// chart 1
var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["りんご", "ぶどう", "ばなな", "めろん", "すいか"],
        //データセット
        datasets: [{
            label: "FRONTEND",
            //背景色
            backgroundColor: "rgba(51,255,51,0.5)",
            //枠線の色
            borderColor: "rgba(51,255,51,1)",
            //結合点の背景色
            pointBackgroundColor: "rgba(51,255,51,1)",
            //結合点の枠線の色
            pointBorderColor: "#fff",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#fff",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "rgba(51,255,51,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [1, 4, 2, 4, 3]
        }]
    },
    //オプションの設定
    options: {
        // レスポンシブ指定
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                // 最小値の値を0指定
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                fontColor: "blue",
                // 最大値を指定
                max: 5,
            },
            pointLabels: {
                fontSize: 11,
                fontColor: "white",
            },
            gridLines: {         // 補助線（目盛の線）
                display: true,
                color: "white",
                lineWidth: 0.5,
            }
        },
        //ラベル非表示
        legend: {
            fontSize: 10,
            color: "white",
            labels: {
                // このフォント設定はグローバルプロパティを上書きします。
                fontSize: 14,
            }
        }
    }
});



// chart 2
var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["りんご", "ぶどう", "ばなな", "めろん", "すいか"],
        //データセット
        datasets: [{
            label: "FRONTEND",
            //背景色
            backgroundColor: "rgba(51,255,51,0.5)",
            //枠線の色
            borderColor: "rgba(51,255,51,1)",
            //結合点の背景色
            pointBackgroundColor: "rgba(51,255,51,1)",
            //結合点の枠線の色
            pointBorderColor: "#fff",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#fff",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "rgba(51,255,51,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [1, 4, 2, 4, 3]
        }]
    },
    //オプションの設定
    options: {
        // レスポンシブ指定
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                // 最小値の値を0指定
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                // 最大値を指定
                max: 5,
            },
            pointLabels: {
                fontSize: 10
            }
        },
        //ラベル非表示
        legend: {
            // display: false
            fontSize: 10,
            labels: {
                // このフォント設定はグローバルプロパティを上書きします。
                fontSize: 14,
            }
        }

    }
});



// chart 3
var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["りんご", "ぶどう", "ばなな", "めろん", "すいか"],
        //データセット
        datasets: [{
            label: "FRONTEND",
            //背景色
            backgroundColor: "rgba(51,255,51,0.5)",
            //枠線の色
            borderColor: "rgba(51,255,51,1)",
            //結合点の背景色
            pointBackgroundColor: "rgba(51,255,51,1)",
            //結合点の枠線の色
            pointBorderColor: "#fff",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#fff",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "rgba(51,255,51,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [1, 4, 2, 4, 3]
        }]
    },
    //オプションの設定
    options: {
        // レスポンシブ指定
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                // 最小値の値を0指定
                beginAtZero: true,
                min: 0,
                stepSize: 1,
                // 最大値を指定
                max: 5,
            },
            pointLabels: {
                fontSize: 10
            }
        },
        //ラベル非表示
        legend: {
            // display: false
            fontSize: 10,
            labels: {
                // このフォント設定はグローバルプロパティを上書きします。
                fontSize: 14,
            }
        }

    }
});