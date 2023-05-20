import { BalanceCard, ChartComponent } from "./components";

const App = () => {
  return (
    <div className="text-center bg-Cream min-h-screen grid place-items-center px-4">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <BalanceCard />
        <ChartComponent />
      </div>
    </div>
  );
};

export default App;
