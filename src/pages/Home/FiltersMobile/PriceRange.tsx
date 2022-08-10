import React from "react";
import styles from "./PriceRange.module.scss";

const PriceRange = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Fourchette de prix</p>
      <p className={styles.subTitle}>Le prix moyen par nuit est de 409€</p>
    </div>
  );
};

export default PriceRange;
