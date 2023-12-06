import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/header/Header";
import Slider from "./component/slider/Slider";
import ProductionHouse from "./layout/productionHouse/ProductionHouse";
import GenreMovieList from "./layout/genreMovieList/GenreMovieList";
import Footer from "./layout/footer/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
      <Footer/>
    </>
  );
}

export default App;
