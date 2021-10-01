import React from "react";
import { Bar } from "react-chartjs-2";

const DetailsChartDaily = ({ date, newrecovered, newconfirmed, newdeaths }) => {
  const data = {
    labels: [...date],
    datasets: [
      {
        label: "New recovered",
        data: [...newrecovered],
        fill: false,
        borderColor: "#48B575",
        backgroundColor: "#48B575",
        borderWidth: 1,
      },
      {
        label: "New deaths",
        data: [...newdeaths],
        fill: false,
        borderColor: "#DC3444",
        backgroundColor: "#DC3444",
        borderWidth: 1,
      },
      {
        label: "New confirmed",
        data: [...newconfirmed],
        fill: false,
        backgroundColor: "#BFBFBF",
        borderColor: "#BFBFBF",
        borderWidth: 1,
      },
    ],
  };

  const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
      with: "2px",
    },
  };

  const options = {
    title: {
      display: false,
      text: "Daily",
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
      <div className="chart-title">Daily</div>
      <Bar
        className="padding-left15"
        data={data}
        legend={legend}
        options={options}
      />
    </div>
  );
};

export default React.memo(DetailsChartDaily);
