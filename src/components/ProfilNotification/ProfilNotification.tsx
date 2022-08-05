import React, { useState } from "react";
import styles from "./ProfilNotification.module.scss";
import userImg from "./../../assets/images/profil/user1.png";

const ProfilNotification = () => {
  const [notification, setNotification] = useState<number>(1);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={userImg} />
      </div>
      {notification > 0 && (
        <div className={styles.notification}>{notification}</div>
      )}
    </div>
  );
};

export default ProfilNotification;
