import React, { useContext } from "react";
import { filterTabs } from "../const/filtersTabs";
import styles from "./FiltersOptions.module.scss";

interface DestinationProps {
  setActiveTab: React.Dispatch<React.SetStateAction<filterTabs>>;
}

const Destination = ({ setActiveTab }: DestinationProps) => {
  return (
    <div
      className={styles.type}
      onClick={() => setActiveTab(filterTabs.destination)}
    >
      <p className={styles.title}>Destination</p>
      <input
        className={styles.input}
        placeholder="Recherchez des destinations"
      />
    </div>
  );
};

export default Destination;
