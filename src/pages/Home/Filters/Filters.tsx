import React, { useState, useContext, createContext } from "react";
import ResearchSvg from "../../../components/Icons/ResearchSvg";
import styles from "./Filters.module.scss";
import Destination from "./Options/Destination";
import Arrival from "./Options/Arrival";
import Departure from "./Options/Departure";
import Travelers from "./Options/Travelers";
import clsx from "clsx";
import DestinationMenu from "./MenuOpen/DestinationMenu";
import { TravelersMenu } from "./MenuOpen/TravelersMenu";
import { DurationMenu } from "./MenuOpen/DurationMenu";
import { filterTabs } from "./const/filtersTabs";

const renderTabs = {
  [filterTabs.none]: null,
  [filterTabs.destination]: <DestinationMenu />,
  [filterTabs.travelers]: <TravelersMenu />,
  [filterTabs.arrival]: <DurationMenu />,
  [filterTabs.departure]: <DurationMenu />,
};

const Filters = ({ isOpen }: { isOpen: boolean }) => {
  const [activeTab, setActiveTab] = useState<filterTabs>(
    filterTabs.destination
  );

  return (
    <div
      className={clsx({
        [styles.filtersContainer]: true,
        [styles.inactive]: !isOpen,
        [styles.active]: isOpen,
      })}
    >
      <ul className={styles.filtersType}>
        <li>Logements</li>
        <li>Expériences</li>
        <li>Expériences en ligne</li>
      </ul>
      <ul
        className={clsx({
          [styles.filtersList]: true,
        })}
      >
        <Destination setActiveTab={setActiveTab} />
        <Arrival setActiveTab={setActiveTab} />
        <Departure setActiveTab={setActiveTab} />
        <Travelers setActiveTab={setActiveTab} />
        {activeTab != filterTabs.none && (
          <div className={styles.filtersOpen}>{renderTabs[activeTab]}</div>
        )}
        <li className={styles.researchContainer}>
          <div className={styles.researchSvg}>
            <ResearchSvg color={"#fff"} width={13} height={13} stroke={5} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
