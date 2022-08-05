import React from "react";
import EarthSvg from "../Icons/EarthSvg";
import ProfilMenuCondensed from "../ProfilMenuCondensed/ProfilMenuCondensed";
import styles from "./HeaderProfil.module.scss";

const HeaderProfil = () => {
  return (
    <div className={styles.headerProfil}>
      <a className={styles.link} href="">
        Devenez hôte
      </a>
      <div className={styles.languages}>
        <EarthSvg width={16} height={16} />
      </div>
      <ProfilMenuCondensed />
    </div>
  );
};

export default HeaderProfil;
