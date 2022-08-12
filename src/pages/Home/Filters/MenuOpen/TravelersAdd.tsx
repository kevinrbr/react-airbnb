import React, { useContext } from "react";
import MinusSvg from "../../../../components/Icons/MinusSvg";
import PlusSvg from "../../../../components/Icons/PlusSvg";
import styles from "./TravelersAdd.module.scss";
import { FilterContext } from "../Filters";

interface TravelersAddProps {
  title: string;
  subTitle: string;
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const TravelersAdd = ({
  title,
  subTitle,
  count,
  increment,
  decrement,
}: TravelersAddProps) => {
  const { travelersTotal } = useContext(FilterContext);
  const isMax = () => {
    if (travelersTotal === 16) {
      let color = "#EBEBEB";
      return color;
    }
  };
  const isMin = () => {
    if (count === 0) {
      let color = "#EBEBEB";
      return color;
    }
  };
  return (
    <li className={styles.listItem}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
      <div className={styles.counter}>
        <button
          className={styles.controller}
          disabled={count === 0 ? true : false}
          onClick={() => {
            decrement();
          }}
        >
          <MinusSvg color={isMin()} />
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.controller}
          onClick={() => {
            increment();
          }}
          disabled={travelersTotal === 16 ? true : false}
        >
          <PlusSvg color={isMax()} />
        </button>
      </div>
    </li>
  );
};
