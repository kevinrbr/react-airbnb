import React from "react";
import { useMedia } from "react-use";
import Header from "../../components/Header/Header";
import HeaderCondensed from "../../components/HeaderCondensed/HeaderCondensed";
import NavBar from "../../components/NavBar/NavBar";
import CarouselCategory from "./CarouselCategory/CarouselCategory";
import DestinationsList from "./DestinationsList/DestinationsList";
import FiltersMenu from "./FiltersMenu/FiltersMenu";
import styles from "./Home.module.scss";

const Home = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={styles.container}>
      {isMobile ? <HeaderCondensed /> : <Header />}
      <CarouselCategory />
      <DestinationsList />
      {isMobile && <NavBar />}
      {<FiltersMenu />}
    </div>
  );
};

export default Home;
