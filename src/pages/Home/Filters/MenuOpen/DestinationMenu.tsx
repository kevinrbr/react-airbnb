import React from "react";
import styles from "./DestinationMenu.module.scss";
import { RecentsSearch } from "./RecentsSearch";
import { RegionFilter } from "./RegionFilter";
import { regions } from "../const/regions";

const DestinationMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <span className={styles.title}>Recherches récentes</span>
        <ul className={styles.recentsList}>
          <RecentsSearch />
        </ul>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.title}>Rechercher par région</span>
        <ul className={styles.regionsList}>
          {regions.map((item) => {
            return <RegionFilter text={item.text} image={item.img} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DestinationMenu;
