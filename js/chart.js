
// chart 1
var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["HTML", "CSS", "SCSS", "Tailwindcss", "JavaScript"],
        //データセット
        datasets: [{
            label: "FRONTEND",
            //背景色
            backgroundColor: "#ff207972",
            //枠線の色
            borderColor: "#ff2979",
            //結合点の背景色
            pointBackgroundColor: "#440BD4)",
            //結合点の枠線の色
            pointBorderColor: "#440BD4",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#440BD4",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "#440BD4",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [5, 3, 3, 2, 3]
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
        labels: ["Python", "Java", "TypeScripts", "Go", "PHP"],
        //データセット
        datasets: [{
            label: "BACKEND",
            //背景色
            backgroundColor: "#ff207972",
            //枠線の色
            borderColor: "#ff2979",
            //結合点の背景色
            pointBackgroundColor: "#440BD4)",
            //結合点の枠線の色
            pointBorderColor: "#440BD4",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#440BD4",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "#440BD4",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [2, 1, 3, 2, 1]
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


// chart 1
var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["React", "Swift", "C", "AWS", "SQL"],
        //データセット
        datasets: [{
            label: "OTHERS",
            //背景色
            backgroundColor: "#ff207972",
            //枠線の色
            borderColor: "#ff2979",
            //結合点の背景色
            pointBackgroundColor: "#440BD4)",
            //結合点の枠線の色
            pointBorderColor: "#440BD4",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#440BD4",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "#440BD4",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [4, 2, 2, 4, 3]
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

