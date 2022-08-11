import React from "react";
import BurgerSvg from "../Icons/BurgerSvg";
import styles from "./ProfilMenuCondensed.module.scss";
import ProfilNotification from "../ProfilNotification/ProfilNotification";

const ProfilMenuCondensed = () => {
  return (
    <button className={styles.ProfilMenuCondensed}>
      <BurgerSvg />
      <ProfilNotification />
    </button>
  );
};

export default ProfilMenuCondensed;
