import React from "react";
import { filterTabs } from "../const/filtersTabs";
import styles from "./FiltersOptions.module.scss";

interface Departure {
  setActiveTab: React.Dispatch<React.SetStateAction<filterTabs>>;
}

const Departure = ({ setActiveTab }: Departure) => {
  return (
    <div
      className={`${styles.duration}`}
      onClick={() => setActiveTab(filterTabs.departure)}
    >
      <div className={styles.type}>
        <p className={styles.title}>Départ</p>
        <span className={styles.subTitle}>Quand ?</span>
      </div>
    </div>
  );
};

export default Departure;
