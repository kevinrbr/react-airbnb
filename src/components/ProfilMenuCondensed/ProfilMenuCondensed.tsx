import React from "react";
import BurgerSvg from "../Icons/BurgerSvg";
import styles from "./ProfilMenuCondensed.module.scss";
import userImg from "./../../assets/images/profil/user1.png";
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
