import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-4xl bg-red-300 text-center font-bold">Hello World</h1>
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
