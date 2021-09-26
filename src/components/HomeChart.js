import { Line } from "react-chartjs-2";

const HomeChart = ({ date, recovered, active, deaths }) => {
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
        backgroundColor: "#BFBFBF90",
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
      text: "Home total",
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
      <Line
        className="container"
        legend={legend}
        options={options}
        data={data}
      />
    </div>
  );
};

export default HomeChart;
