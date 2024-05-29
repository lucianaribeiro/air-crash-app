"use client";

import React, { use, useEffect, useState } from "react";
import styles from "./SearchComponent.module.css";
import { IFlight } from "@/interfaces/IFlight.interface";
import { flights } from "@/data/flights";

interface ISearchComponent {
  onFilter: (list: IFlight[]) => void;
}

//useMemo
//useRef
const SearchComponent = ({ onFilter }: ISearchComponent) => {
  const searchForDestination = (event: any) => {
    const filteredList = flights.filter((flight) =>
      flight.destination
        .toLocaleLowerCase()
        .match(event.target.value.toLocaleLowerCase())
    );
    onFilter(filteredList);
  };

  return (
    <div className={styles.search}>
      <label className={styles.label}>Search for destiny</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        name="search"
        onChange={searchForDestination}
      />
    </div>
  );
};

export default SearchComponent;
