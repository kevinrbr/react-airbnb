import React from "react";
import styles from "./CardDescription.module.scss";

interface CardDescriptionProps {
  location: string;
  sellerStatus: string;
  date: string;
}

const CardDescription = ({
  location,
  sellerStatus,
  date,
}: CardDescriptionProps) => {
  return (
    <div className={styles.cardDescription}>
      <h6 className={styles.location}>{location}</h6>
      <p className={styles.sellerStatus}>{sellerStatus}</p>
      <p className={styles.date}>{date}.</p>
    </div>
  );
};

export default CardDescription;
