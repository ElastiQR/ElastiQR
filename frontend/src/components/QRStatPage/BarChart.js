// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { green } from '@material-ui/core/colors'
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Last Year", "Last Month", "Last Week", "Today"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your QR Code's Usage",
        backgroundColor: "#62D2A2",
        borderColor: "#62D2A2",
        data: [100, 50, 25, 5],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;