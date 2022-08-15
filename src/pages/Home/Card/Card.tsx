import React from "react";
import styles from "./Card.module.scss";
import PriceByNight from "./PriceByNight/PriceByNight";
import CardDescription from "./CardDescription/CardDescription";
import Favorite from "../../../components/Favorite/Favorite";
import { useFormatDate } from "../../../hooks/useFormatDate";
import Rating from "./Rating/Rating";

interface DestinationsProps {
  image: string[];
  location: string;
  sellerStatus: string;
  begginningDate: Date;
  finishingDate: Date;
  priceByNight: number;
  stars: number;
  children: React.ReactNode;
}

const Card = (props: DestinationsProps) => {
  const date = useFormatDate(props.begginningDate, props.finishingDate);
  return (
    <li className={styles.card}>
      <Favorite />
      {props.children}
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <CardDescription
            location={props.location}
            sellerStatus={props.sellerStatus}
            date={date}
          />
          <PriceByNight price={props.priceByNight} />
        </div>
        <div className={styles.contentRight}>
          <Rating rating={props.stars} />
        </div>
      </div>
    </li>
  );
};

export default Card;
