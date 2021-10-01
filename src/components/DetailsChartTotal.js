import React from "react";
import { Line } from "react-chartjs-2";

const DetailsChartTotal = ({ date, recovered, active, deaths }) => {
  const data = {
    labels: [...date],
    datasets: [
      {
        label: "Recovered",
        data: [...recovered],
        fill: false,
        borderColor: "#48B575",
        backgroundColor: "#48B575",
        pointRadius: 1,
      },
      {
        label: "Deaths",
        data: [...deaths],
        fill: false,
        borderColor: "#DC3444",
        backgroundColor: "#DC3444",
        pointRadius: 1,
      },
      {
        label: "Active",
        data: [...active],
        fill: true,
        backgroundColor: "#BFBFBF80",
        borderColor: "#BFBFBF",
        pointRadius: 1,
      },
    ],
  };

  const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const options = {
    title: {
      display: false,
      text: "Total",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return (
    <div className="col margin20">
      <div className="chart-title">Total</div>
      <Line
        className="padding-right15"
        data={data}
        legend={legend}
        options={options}
      />
    </div>
  );
};

export default React.memo(DetailsChartTotal);
