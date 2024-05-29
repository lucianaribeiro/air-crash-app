"use client";
import React, { useRef, useState } from "react";

import styles from "./HomePage.module.css";
import SearchComponent from "@/components/SearchComponent";
import FlightListComponent from "@/components/FlightListComponent";
import { IFlight } from "@/interfaces/IFlight.interface";
import { flights } from "@/data/flights";

const HomePage = () => {
  const [filteredList, setFilteredList] = useState<IFlight[]>(flights);
  const [currency, setCurrency] = useState(false);
  const currencyRef = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getFilteredList = (filteredList: IFlight[]) => {
    setFilteredList(filteredList);
  };

  const handleClick = () => {
    setCurrency(!currency);
    currencyRef.current = currencyRef.current + 1;
    if (currency) {
      buttonRef?.current?.style.setProperty("background-color", "black");
    } else {
      buttonRef?.current?.style.setProperty("background-color", "#586188");
    }
  };

  return (
    <>
      <div className={styles.header}>
        <span className={styles.title}>Air Crash Airlines</span>
      </div>
      <div className={styles.body}>
        <button
          className={styles.currencyBtn}
          type="button"
          onClick={handleClick}
          ref={buttonRef}
        >
          Change Currency
        </button>
        <SearchComponent onFilter={getFilteredList} />
        <FlightListComponent
          filteredList={filteredList}
          changeCurrency={currency}
        />
      </div>
    </>
  );
};

export default HomePage;
