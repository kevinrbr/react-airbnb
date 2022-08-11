import React from "react";
import styles from "./TravelersMenu.module.scss";
import { travelers } from "../const/travelers";
import { TravelersAdd } from "./TravelersAdd";

export const TravelersMenu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {travelers.map((item) => {
          return <TravelersAdd title={item.title} subTitle={item.subTitle} />;
        })}
      </ul>
    </div>
  );
};
