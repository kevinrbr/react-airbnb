import React, { useState } from "react";
import styles from "./CarouselCategory.module.scss";

import { Categories } from "./const/carouselCategory";

const CarouselCategory = () => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {Categories.map((item, index) => {
          return (
            <li
              className={`${
                active === index ? styles.categoriesItemActive : ""
              } ${styles.categoriesItem}`}
              onClick={() => setActive(index)}
              key={index}
            >
              <img src={item.pictures} className={styles.images} />
              <span className={styles.title}>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarouselCategory;
