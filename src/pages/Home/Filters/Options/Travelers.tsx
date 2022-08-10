import React from "react";
import { filterTabs } from "../const/filtersTabs";
import styles from "./FiltersOptions.module.scss";

interface TravelersProps {
  setActiveTab: React.Dispatch<React.SetStateAction<filterTabs>>;
}

const Travelers = ({ setActiveTab }: TravelersProps) => {
  return (
    <div
      className={styles.type}
      onClick={() => setActiveTab(filterTabs.travelers)}
    >
      <p className={styles.title}>Voyageurs</p>
      <span className={styles.subTitle}>Qui ?</span>
    </div>
  );
};

export default Travelers;
