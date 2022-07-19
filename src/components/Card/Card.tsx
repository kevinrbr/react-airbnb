import React from "react";
import styles from "./Card.module.scss";

interface DestinationsProps {
  image: string;
  location: string;
  sellerStatus: string;
  begginningDate: Date;
  finshingDate: Date;
  priceByNight: number;
  stars: number;
}

const Card = (props: DestinationsProps) => {
  return (
    <li className={styles.card}>
      <div className={styles.imagesContainer}>
        <img className={styles.images} src={props.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h6 className={styles.location}>{props.location}</h6>
          <p className={styles.sellerStatus}>{props.sellerStatus}</p>
          <p className={styles.date}>7-12 mai</p>
          <p className={styles.price}>
            <span>{props.priceByNight}€ </span>/ nuit
          </p>
        </div>
        <div className={styles.contentRight}>
          <span className={styles.notation}>{props.stars}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
