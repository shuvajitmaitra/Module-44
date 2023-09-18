import "./App.css";
import BarCharts from "./Components/BarCharts/BarCharts";
import LineCharts from "./Components/LineCharts/LineCharts";
import Navbar from "./Components/Navbar/navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-4xl bg-red-300 text-center font-bold">Hello World</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <BarCharts></BarCharts>
    </div>
  );
}

export default App;
