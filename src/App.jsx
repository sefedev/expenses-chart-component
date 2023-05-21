import { BalanceCard, ChartComponent } from "./components";
import data from './data/data.json'

const App = () => {

  //SUM OF DATA AMOUNT
  // const sumData = data.map(item => {
  //   return item.amount
  // }).reduce((prev, current) => {
  //   return prev + current
  // })

  
  return (
    <div className="text-center bg-Cream min-h-screen grid place-items-center px-4">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <BalanceCard />
        <ChartComponent data={data}/>
      </div>
    </div>
  );
};

export default App;
