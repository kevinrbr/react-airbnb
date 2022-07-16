import React from "react";
import styles from "./SearchDestinationMobile.module.scss";
import ResearchSvg from "../../../components/Icons/ResearchSvg";
import FilterSvg from "../../../components/Icons/FilterSvg";

const SearchDestinationMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div className={styles.searchLeft}>
          <button className={styles.researchSvg}>
            <ResearchSvg color={"#505050"} width={16} height={16} />
          </button>
          <button className={styles.searchContent}>
            <span className={styles.searchTitle}>Destination</span>
            <div className={styles.searchSubTitles}>
              <div className={styles.searchSubTitleContainer}>
                <span className={styles.searchSubTitle}>N'importe où</span>
              </div>
              <span className={styles.searchDot}>•</span>
              <div className={styles.searchSubTitleContainer}>
                <span className={styles.searchSubTitle}>Une semaine</span>
              </div>
              <span className={styles.searchDot}>•</span>
              <div className={styles.searchSubTitleContainer}>
                <span className={styles.searchSubTitle}>
                  Ajouter des voyageurs
                </span>
              </div>
            </div>
          </button>
        </div>
        <button className={styles.filterContainer}>
          <div className={styles.filterSvg}>
            <FilterSvg width={16} height={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchDestinationMobile;
