import React from "react";
import { useMedia } from "react-use";
import CarouselCategory from "../../pages/Home/CarouselCategory/CarouselCategory";
import SearchDestinationMobile from "../../pages/Home/SearchDestinationMobile/SearchDestinationMobile";
import LogoFull from "../LogoFull/LogoFull";

const Header = () => {
  const isTablet = useMedia("(min-width: 480px)");
  const isDesktop = useMedia("(min-width: 768px)");

  return (
    <>
      {isDesktop && <LogoFull />}
      {isTablet && isDesktop != true ? "Petit logo" : null}
      <SearchDestinationMobile />
    </>
  );
};

export default Header;
