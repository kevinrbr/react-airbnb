import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { destinations } from "../../../types/destinations/destinations";
import styles from "./RoomDetails.module.scss";

const RoomDetails = () => {
  const location = useLocation();
  const item = location.state as destinations;
  return (
    <div className={styles.container}>
      <Header />
      {item.location}
    </div>
  );
};

export default RoomDetails;
