import React, { CSSProperties } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./CardCarousel.module.scss";

interface CardCarouselProps {
  image: string[];
}

const CardCarousel = ({ image }: CardCarouselProps) => {
  const indicatorStyles: CSSProperties = {
    background: "#fff",
    width: 6,
    height: 6,
    display: "inline-block",
    margin: "0 3px",
    borderRadius: "100px",
    opacity: "0.3",
  };
  return (
    <div className={styles.CardCarousel}>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return <li style={{ ...indicatorStyles, opacity: "1" }} />;
          }
          return <li style={indicatorStyles} />;
        }}
      >
        {image.map((item, index) => (
          <div className={styles.imagesContainer} key={index}>
            <img className={styles.images} src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
