import React from "react";
import styles from "./TravelersAdd.module.scss";

interface TravelersAddProps {
  title: string;
  subTitle: string;
}

export const TravelersAdd = ({ title, subTitle }: TravelersAddProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </li>
  );
};
