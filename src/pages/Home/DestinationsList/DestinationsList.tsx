import React, { useEffect, useState } from "react";
import styles from "./DestinationsList.module.scss";
import axios from "axios";
import { destinations } from "../../../types/destinations/destinations";
import Card from "../../../components/Card/Card";
import CardCarousel from "../../../components/CardCarousel/CardCarousel";

const DestinationsList = () => {
  const [destinationsList, setDestinationsList] = useState<destinations[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/destinations")
      .then((res) => setDestinationsList(res.data));
  }, []);

  return (
    <>
      <ul className={styles.destinationsList}>
        {destinationsList.map((item) => {
          return (
            <Card
              image={item.image}
              location={item.location}
              sellerStatus={item.sellerStatus}
              begginningDate={item.begginningDate}
              finshingDate={item.finshingDate}
              priceByNight={item.priceByNight}
              stars={item.stars}
            >
              <CardCarousel image={item.image} />
            </Card>
          );
        })}
      </ul>
    </>
  );
};

export default DestinationsList;
