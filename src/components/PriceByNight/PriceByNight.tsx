import React from "react";
import styles from "./PriceByNight.module.scss";

interface PriceByNightProps {
  price: number;
}

const PriceByNight = ({ price }: PriceByNightProps) => {
  return (
    <div className={styles.priceContent}>
      <span className={styles.price}>{price} € </span>/ nuit
    </div>
  );
};

export default PriceByNight;
