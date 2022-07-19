import React, { useState } from "react";
import styles from "./CarouselCategory.module.scss";
import Isles from "../../../assets/images/categories/isles.jpeg";
import NationnalsParks from "../../../assets/images/categories/nationals_parks.jpeg";
import TinyHouses from "../../../assets/images/categories/tiny_houses.jpeg";
import Wow from "../../../assets/images/categories/wow.jpeg";
import Playas from "../../../assets/images/categories/playa.jpeg";
import Cabanes from "../../../assets/images/categories/cabanes.jpeg";
import Design from "../../../assets/images/categories/design.jpeg";
import Camping from "../../../assets/images/categories/camping.jpeg";

const Categories = [
  {
    pictures: Isles,
    title: "Iles",
  },
  {
    pictures: NationnalsParks,
    title: "Parcs Nationaux",
  },
  {
    pictures: TinyHouses,
    title: "Tiny Houses",
  },
  {
    pictures: Wow,
    title: "Wow !",
  },
  {
    pictures: Playas,
    title: "Plages",
  },
  {
    pictures: Cabanes,
    title: "Cabanes",
  },
  {
    pictures: Design,
    title: "Design",
  },
  {
    pictures: Camping,
    title: "Camping",
  },
];

const CarouselCategory = () => {
  const [active, setActive] = useState("");
  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {Categories.map((item) => {
          return (
            <li
              className={`${
                active === item.title ? styles.categoriesItemActive : ""
              } ${styles.categoriesItem}`}
              onClick={() => setActive(item.title)}
              key={item.title}
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
