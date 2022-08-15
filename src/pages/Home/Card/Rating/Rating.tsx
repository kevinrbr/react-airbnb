import React from "react";
import styles from "./Rating.module.scss";
import StarSvg from "../../../../components/Icons/StarSvg";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className={styles.ratingContent}>
      <StarSvg width={12} height={12} />
      <span className={styles.note}>{rating}</span>
    </div>
  );
};

export default Rating;
