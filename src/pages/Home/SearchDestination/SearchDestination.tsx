import React from "react";
import ResearchSvg from "../../../components/Icons/ResearchSvg";
import styles from "./SearchDestination.module.scss";

const SearchDestination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <button className={styles.text}>
          <span>N'importe où</span>
        </button>
        <button className={styles.text}>
          <span>Une semaine</span>
        </button>
        <button className={styles.text}>
          <span>Ajouter des voyageurs</span>
        </button>
        <button className={styles.researchContainer}>
          <div className={styles.researchSvg}>
            <ResearchSvg color={"#fff"} width={13} height={13} stroke={5} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchDestination;
