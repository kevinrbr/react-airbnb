import React, { useState } from "react";
import MinusSvg from "../../../../components/Icons/MinusSvg";
import PlusSvg from "../../../../components/Icons/PlusSvg";
import styles from "./TravelersAdd.module.scss";

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
          <MinusSvg />
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.controller}
          onClick={() => {
            increment();
          }}
        >
          <PlusSvg />
        </button>
      </div>
    </li>
  );
};
