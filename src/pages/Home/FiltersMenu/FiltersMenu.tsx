import React from "react";
import styles from "./FiltersMenu.module.scss";
import CrossSvg from "../../../components/Icons/CrossSvg";
import PriceRange from "./PriceRange";

const FiltersMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CrossSvg width={15} height={15} />
        <h3>Filtres</h3>
      </div>
      <PriceRange />
    </div>
  );
};

export default FiltersMenu;
