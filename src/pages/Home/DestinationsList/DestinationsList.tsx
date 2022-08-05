import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      .then((data) => setDestinationsList(data.data));
  }, []);

  return (
    <>
      <p className={styles.textFilter}>Classement par ordre de pertinence</p>
      <ul className={styles.destinationsList}>
        {destinationsList.map((item) => {
          return (
            <Link target="_blank" state={item} to={`/roomDetails/${item.id}`}>
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
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default DestinationsList;
