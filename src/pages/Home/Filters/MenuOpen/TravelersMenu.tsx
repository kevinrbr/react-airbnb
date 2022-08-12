import React, { useState, useContext, useEffect } from "react";
import styles from "./TravelersMenu.module.scss";
import { travelers } from "../const/travelers";
import { TravelersAdd } from "./TravelersAdd";
import { useCounter } from "./../../../../hooks/useCounter";
import { FilterContext } from "./../../Filters/Filters";

export const TravelersMenu = () => {
  const { count, increment, decrement, total } = useCounter(travelers.length);
  const { travelersTotal, setTravelersTotal } = useContext(FilterContext);

  useEffect(() => {
    return setTravelersTotal(total);
  }, [total]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {travelers.map((item, i) => {
          return (
            <TravelersAdd
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              count={count[i]}
              increment={() => increment(i)}
              decrement={() => decrement(i)}
            />
          );
        })}
      </ul>
    </div>
  );
};
