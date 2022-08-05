import React from "react";
import { useMedia } from "react-use";
import { Link, useLocation } from "react-router-dom";
import SearchDestinationMobile from "../../pages/Home/SearchDestinationMobile/SearchDestinationMobile";
import LogoFull from "../LogoFull/LogoFull";
import AirbnbSvg from "../Icons/AirbnbSvg";
import styles from "./Header.module.scss";
import HeaderProfil from "../HeaderProfil/HeaderProfil";
import SearchDestination from "../../pages/Home/SearchDestination/SearchDestination";

const Header = () => {
  const isTablet = useMedia("(min-width: 768px)");
  const isDesktop = useMedia("(min-width: 1224px)");

  return (
    <div className={styles.header}>
      <Link to={"/"}>{isDesktop && <LogoFull />}</Link>
      {isTablet && isDesktop != true ? <AirbnbSvg /> : null}
      <SearchDestination />
      <HeaderProfil />
    </div>
  );
};

export default Header;
