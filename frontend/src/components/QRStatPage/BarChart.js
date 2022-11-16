// ./components/BarChart.js

import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import UserService from "../../services/user.service";

const BarChart = () => {

  const [lastyear, setLastYear] = useState(0);
  const [last30, set30] = useState(0);
  const [lastweek, setlastweek] = useState(0);
  const [today, settoday] = useState(0);

  UserService.countQR(this.props.location.state.id, 365)
  .then(
    (response) => {
      setLastYear(response.data.quantity);
    }
  )
  UserService.countQR(this.props.location.state.id, 30)
  .then(
    (response) => {
      set30(response.data.quantity);
    }
  )
  UserService.countQR(this.props.location.state.id, 7)
  .then(
    (response) => {
      setlastweek(response.data.quantity);
    }
  )
  UserService.countQR(this.props.location.state.id, 1)
  .then(
    (response) => {
      settoday(response.data.quantity);
    }
  )

  const labels = ["Last Year", "Last 30 Days", "Last Week", "Today"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your QR Code's Usage",
        backgroundColor: "#62D2A2",
        borderColor: "#62D2A2",
        data: [{lastyear}, {last30}, {lastweek}, {today}],
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