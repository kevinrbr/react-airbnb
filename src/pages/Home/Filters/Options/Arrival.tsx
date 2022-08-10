import React from "react";
import { filterTabs } from "../const/filtersTabs";
import styles from "./FiltersOptions.module.scss";

interface ArrivalProps {
  setActiveTab: React.Dispatch<React.SetStateAction<filterTabs>>;
}

const Arrival = ({ setActiveTab }: ArrivalProps) => {
  return (
    <div
      className={`${styles.duration}`}
      onClick={() => setActiveTab(filterTabs.arrival)}
    >
      <div className={styles.type}>
        <p className={styles.title}>Arrivée</p>
        <span className={styles.subTitle}>Quand ?</span>
      </div>
    </div>
  );
};

export default Arrival;
