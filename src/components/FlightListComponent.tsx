"use client";
import React, { useEffect, useState } from "react";

import { flights } from "../data/flights";
import { IFlight } from "@/interfaces/IFlight.interface";
import style from "./FlightListComponent.module.css";
import FlightComponent from "./FlightComponent";

interface IFlightListComponent {
  filteredList: IFlight[];
  changeCurrency: boolean;
}

const FlightListComponent = ({
  filteredList,
  changeCurrency,
}: IFlightListComponent) => {
  const [flightList, setFlightsList] = useState<IFlight[]>(filteredList);
  const [favoriteList, setFavoriteList] = useState<IFlight[]>([]);

  useEffect(() => {
    setFlightsList(filteredList);
  }, [filteredList]);

  const getCurrency = (price: number, changeCurrency: boolean) => {
    return changeCurrency ? `$ ${price * 5},00` : `R$ ${price},00`;
  };

  const updateFavoriteList = (flight: IFlight) => {
    if (
      favoriteList.filter((favorites) => favorites.id === flight.id).length ===
      0
    ) {
      setFavoriteList([...favoriteList, flight]);
    }
  };

  const removeFromFavoriteList = (flight: IFlight) => {
    setFavoriteList(favoriteList.filter((f) => f.id !== flight.id));
  };

  return (
    <div className={style.listContainer}>
      <div>
        {flightList.map((flight) => (
          <FlightComponent
            key={flight.id}
            flight={flight}
            currency={changeCurrency}
            isFavorited={false}
            getCurrency={getCurrency}
            updateFavoriteList={updateFavoriteList}
            removeFromFavoriteList={removeFromFavoriteList}
          />
        ))}
      </div>
      <div>
        <h1 className={style.favoriteTitle}>Favorites Flights</h1>
        {favoriteList.map((flight) => (
          <FlightComponent
            key={flight.id}
            flight={flight}
            currency={changeCurrency}
            isFavorited={true}
            getCurrency={getCurrency}
            updateFavoriteList={updateFavoriteList}
            removeFromFavoriteList={removeFromFavoriteList}
          />
        ))}
      </div>
    </div>
  );
};
export default FlightListComponent;
