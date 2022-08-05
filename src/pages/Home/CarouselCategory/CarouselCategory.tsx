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
    id: 1,
  },
  {
    pictures: NationnalsParks,
    title: "Parcs Nationaux",
    id: 2,
  },
  {
    pictures: TinyHouses,
    title: "Tiny Houses",
    id: 3,
  },
  {
    pictures: Wow,
    title: "Wow !",
    id: 4,
  },
  {
    pictures: Playas,
    title: "Plages",
    id: 5,
  },
  {
    pictures: Cabanes,
    title: "Cabanes",
    id: 6,
  },
  {
    pictures: Design,
    title: "Design",
    id: 7,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 8,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 9,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 10,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 11,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 12,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 13,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 14,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 15,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 16,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 17,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 18,
  },
  {
    pictures: Camping,
    title: "Camping",
    id: 19,
  },
];

const CarouselCategory = () => {
  const [active, setActive] = useState<Number>(1);
  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {Categories.map((item) => {
          return (
            <li
              className={`${
                active === item.id ? styles.categoriesItemActive : ""
              } ${styles.categoriesItem}`}
              onClick={() => setActive(item.id)}
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
