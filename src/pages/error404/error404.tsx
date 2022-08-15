import React from "react";
import styles from "./error404.module.scss";

export const Error404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Oups !</p>
      <p className={styles.subTitle}>
        La page que vous recherchez semble introuvable.
      </p>
    </div>
  );
};
