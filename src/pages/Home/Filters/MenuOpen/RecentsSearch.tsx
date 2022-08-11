import React from "react";
import { TimeSvg } from "../../../../components/Icons/TimeSvg";
import styles from "./RecentsSearch.module.scss";

export const RecentsSearch = () => {
  return (
    <li className={styles.listItem}>
      <button className={styles.content}>
        <div className={styles.imgContainer}>
          <TimeSvg width={20} height={20} />
        </div>
        <div className={styles.details}>
          <span className={styles.title}>Afrique - Logement</span>
          <span className={styles.subTitle}>15-17 août - 2 voyageurs</span>
        </div>
      </button>
    </li>
  );
};
