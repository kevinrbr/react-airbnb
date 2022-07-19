import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CarouselCategory from "./CarouselCategory/CarouselCategory";
import DestinationsList from "./DestinationsList/DestinationsList";
import SearchDestinationMobile from "./SearchDestinationMobile/SearchDestinationMobile";

const Home = () => {
  return (
    <div>
      <SearchDestinationMobile />
      <CarouselCategory />
      <DestinationsList />
      <NavBar />
    </div>
  );
};

export default Home;
