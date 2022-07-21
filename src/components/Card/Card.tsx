import React from "react";
import Rating from "../Rating/Rating";
import styles from "./Card.module.scss";
import PriceByNight from "../PriceByNight/PriceByNight";
import CardDescription from "../CardDescription/CardDescription";
import Favorite from "../Favorite/Favorite";

interface DestinationsProps {
  image: string[];
  location: string;
  sellerStatus: string;
  begginningDate: Date;
  finshingDate: Date;
  priceByNight: number;
  stars: number;
  children: React.ReactNode;
}

const Card = (props: DestinationsProps) => {
  return (
    <li className={styles.card}>
      <Favorite />
      {props.children}
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <CardDescription
            location={props.location}
            sellerStatus={props.sellerStatus}
            date={"7-12 mai"}
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
