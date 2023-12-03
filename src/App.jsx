import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/header/Header";
import Slider from "./component/slider/Slider";
import ProductionHouse from "./layout/productionHouse/ProductionHouse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
    </>
  );
}

export default App;
