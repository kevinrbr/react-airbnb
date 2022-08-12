import React, { useContext } from "react";
import { filterTabs } from "../const/filtersTabs";
import styles from "./FiltersOptions.module.scss";
import { FilterContext } from "../Filters";

interface TravelersProps {
  setActiveTab: React.Dispatch<React.SetStateAction<filterTabs>>;
}

const Travelers = ({ setActiveTab }: TravelersProps) => {
  const { travelersTotal } = useContext(FilterContext);
  return (
    <div
      className={styles.type}
      onClick={() => setActiveTab(filterTabs.travelers)}
    >
      <p className={styles.title}>Voyageurs</p>
      <span className={styles.subTitle}>
        {travelersTotal != 0 ? (
          <span className={styles.bold}> {travelersTotal}</span>
        ) : (
          "Qui ?"
        )}
        {travelersTotal > 1 ? (
          <span className={styles.bold}> voyageurs</span>
        ) : travelersTotal === 0 ? (
          ""
        ) : (
          <span className={styles.bold}> voyageur</span>
        )}
      </span>
    </div>
  );
};

export default Travelers;
