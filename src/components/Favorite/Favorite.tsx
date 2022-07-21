import React from "react";
import HeartSvg from "../Icons/HeartSvg";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <HeartSvg
        color={"#fff"}
        width={22}
        height={22}
        fill={"rgba(0, 0, 0, 0.5)"}
      />
    </div>
  );
};

export default Favorite;
