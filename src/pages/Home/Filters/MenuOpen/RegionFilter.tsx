import React from "react";
import styles from "./RegionFilter.module.scss";
import region1 from "./../../../../assets/images/filterDestinations/world.jpeg";

export const RegionFilter = ({
  text,
  image,
}: {
  text: string;
  image: string;
}) => {
  return (
    <li className={styles.listItem}>
      <button className={styles.content}>
        <img src={image} />
        <span className={styles.title}>{text}</span>
      </button>
    </li>
  );
};
