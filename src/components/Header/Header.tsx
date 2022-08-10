import React, { useState } from "react";
import { useMedia } from "react-use";
import { Link } from "react-router-dom";
import LogoFull from "../LogoFull/LogoFull";
import AirbnbSvg from "../Icons/AirbnbSvg";
import styles from "./Header.module.scss";
import HeaderProfil from "../HeaderProfil/HeaderProfil";
import SearchDestination from "../../pages/Home/SearchDestination/SearchDestination";
import clsx from "clsx";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
  const isTablet = useMedia("(min-width: 768px)");
  const isDesktop = useMedia("(min-width: 1224px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div
      className={clsx({
        [styles.header]: true,
        [styles.isOpen]: isOpen,
      })}
      ref={ref}
    >
      <div className={styles.headerContent}>
        <Link to={"/"}>{isDesktop && <LogoFull />}</Link>
        {isTablet && isDesktop != true ? <AirbnbSvg /> : null}
        <SearchDestination setIsOpen={() => setIsOpen(true)} isOpen={isOpen} />
        <HeaderProfil />
      </div>
    </div>
  );
};

export default Header;
