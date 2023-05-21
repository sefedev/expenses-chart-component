
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

// eslint-disable-next-line
const ChartComponent = ({ data }) => {
  // eslint-disable-next-line
  const maxAmount = Math.max(...data.map((item) => item.amount));
  const userData = {
    // eslint-disable-next-line
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: null,
        // eslint-disable-next-line
        data: data.map((item) => item.amount),
        borderRadius: "20px",
        // eslint-disable-next-line
        backgroundColor: data.map((item) =>
          item.amount === maxAmount ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
        ),
        // eslint-disable-next-line
        hoverBackgroundColor: data.map((item) =>
        item.amount === maxAmount ? "hsl(186, 34%, 80%)" : "hsl(10, 79%, 85%)")
      },
    ],
  };

  const option = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="text-DarkBrown bg-PaleOrange rounded-xl shadow-md px-4 py-6">
      <h2 className="text-2xl font-semibold">Spending - Last 7 days</h2>
      <div className="w-full grid place-items-center">
        <Bar data={userData} options={option} />
      </div>
      <hr className="my-6 shadow-sm" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-gray-400">Total this month</h3>
          <h1 className="font-semibold text-3xl">$478.33</h1>
        </div>
        <div className="flex flex-col justify-end items-end">
          <h6 className="text-sm font-semibold">+2.4%</h6>
          <h4 className="text-gray-400 text-sm">from last month</h4>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
