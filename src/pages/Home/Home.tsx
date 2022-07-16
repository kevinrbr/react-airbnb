import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CarouselCategory from "./CarouselCategory/CarouselCategory";
import SearchDestinationMobile from "./SearchDestinationMobile/SearchDestinationMobile";

const Home = () => {
  return (
    <div>
      <SearchDestinationMobile />
      <CarouselCategory />
      <NavBar />
    </div>
  );
};

export default Home;
