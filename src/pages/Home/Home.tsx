import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchDestinationMobile from "./SearchDestinationMobile/SearchDestinationMobile";

const Home = () => {
  return (
    <div>
      <SearchDestinationMobile />
      <NavBar />
    </div>
  );
};

export default Home;
