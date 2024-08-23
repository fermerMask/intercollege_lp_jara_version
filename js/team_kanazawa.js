var ctx = document.getElementById("kanazawa");
var myRadarChart = new Chart(ctx, {
  // !!以下のtypeは共通の為触れないでください
  type: "radar",
  data: {
    //変更項目　　　データの各項目のラベルを設定してください(上から時計回り)
    labels: ["料理スキルさ", "同期愛", "艇庫の布団", "扇風機の奪い合い", "中山きんにくん信仰"],
    datasets: [
      {
        //変更項目　上記のlabelsで設定した項目の数値を設定できます(上から時計回り)
        data: [5,5,2,5,5],
        // !!以下3行共通の為触れないでください
        borderColor: "transparent",
        pointBackgroundColor: "rgba(11, 89, 191, 0.5)",
        backgroundColor: "rgba(4, 157, 217, 0.7)",
      },
    ],
  },
  //!!こちらから下の設定は共通となっておりますので、お手を触れないように注意してください
  options: {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1, //目盛間隔
        },
        //グラフの最小値・最大値
        min: 0,
        max: 5,
        //背景色
        backgroundColor: "transparent",
        //グリッドライン
        grid: {
          color: "#D9D9D9",
        },
        //アングルライン
        angleLines: {
          color: "#D9D9D9",
        },
        //各項目のラベル
        pointLabels: {
          color: "#0B59BF",
          font: { size: 14, weight: "bold" },
        },
      },
    },
  },
});
Chart.defaults.font = {
  family: "'Helvetica', 'Meiryo UI'",
  size: 15,
  style: "normal",
  weight: "nomal",
  lineHeight: 1.2,
};