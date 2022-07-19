import React from "react";
import { Link, useLocation } from "react-router-dom";
import AirbnbSvg from "../Icons/AirbnbSvg";
import HeartSvg from "../Icons/HeartSvg";
import MessageSvg from "../Icons/MessageSvg";
import ProfileSvg from "../Icons/ProfileSvg";
import ResearchSvg from "../Icons/ResearchSvg";
import styles from "./NavBar.module.scss";

const navBarLinks = [
  {
    Icon: ResearchSvg,
    link: "",
    subTitle: "Explorer",
  },
  {
    Icon: HeartSvg,
    link: "wishlists",
    subTitle: "Favoris",
  },
  {
    Icon: AirbnbSvg,
    link: "trips",
    subTitle: "Voyages",
  },
  {
    Icon: MessageSvg,
    link: "inbox",
    subTitle: "Messages",
  },
  {
    Icon: ProfileSvg,
    link: "account-settings",
    subTitle: "Profil",
  },
];

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className={styles.bottomNav}>
      <ul className={styles.bottomNavList}>
        {navBarLinks.map(({ Icon, link, subTitle }) => {
          return (
            <li className={styles.bottomNavItem} key={subTitle}>
              <Link to={`/${link}`}>
                {typeof Icon === "function" && (
                  <Icon
                    color={
                      location.pathname === `/${link}` ? "#ff385c" : "#b4b4b4"
                    }
                  />
                )}
                <span
                  className={
                    location.pathname === `/${link}`
                      ? styles.bottomNavSubTitleActive
                      : styles.bottomNavSubTitle
                  }
                >
                  {subTitle}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
