import React, { useState } from "react";
import ResearchSvg from "../../../components/Icons/ResearchSvg";
import styles from "./SearchDestination.module.scss";
import clsx from "clsx";
import Filters from "../Filters/Filters";

interface SearchDestinationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  isOpen: boolean;
}

const SearchDestination = ({ setIsOpen, isOpen }: SearchDestinationProps) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [styles.isOpen]: isOpen,
      })}
      onClick={() => setIsOpen(true)}
    >
      <ul
        className={clsx({
          [styles.searchBar]: true,
          [styles.isOpen]: isOpen,
        })}
      >
        <li className={styles.text}>N'importe où</li>
        <li className={styles.text}>Une semaine</li>
        <li className={styles.text}>Ajouter des voyageurs</li>
        <li className={styles.researchContainer}>
          <div className={styles.researchSvg}>
            <ResearchSvg color={"#fff"} width={13} height={13} stroke={5} />
          </div>
        </li>
      </ul>
      <Filters isOpen={isOpen} />
    </div>
  );
};

export default SearchDestination;
