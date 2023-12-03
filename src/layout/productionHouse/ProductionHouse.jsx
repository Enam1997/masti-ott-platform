import React from "react";

import disney from "../../assets/images/productionHouse/disney.png";
import marvel from "../../assets/images/productionHouse/marvel.png";
import nationalG from "../../assets/images/productionHouse/nationalG.png";
import pixar from "../../assets/images/productionHouse/pixar.png";
import starwar from "../../assets/images/productionHouse/starwar.png";

import disneyVideo from "../../assets/images/productionHouseVideo/disney.mp4";
import marvelVideo from "../../assets/images/productionHouseVideo/marvel.mp4";
import nationalgeographicVideo from "../../assets/images/productionHouseVideo/nationalgeographic.mp4";
import pixarVideo from "../../assets/images/productionHouseVideo/pixar.mp4";
import starwarsVideo from "../../assets/images/productionHouseVideo/starwars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: marvel,
      video: marvelVideo,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalgeographicVideo,
    },
    {
      id: 4,
      image: pixar,
      video: pixarVideo,
    },
    {
      id: 5,
      image: starwar,
      video: starwarsVideo,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 w-full"
          ></video>
          <img src={item.image} alt="" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
