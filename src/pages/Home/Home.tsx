import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import CarouselCategory from "./CarouselCategory/CarouselCategory";
import DestinationsList from "./DestinationsList/DestinationsList";
import SearchDestinationMobile from "./SearchDestinationMobile/SearchDestinationMobile";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselCategory />
      <DestinationsList />
      <NavBar />
    </div>
  );
};

export default Home;
