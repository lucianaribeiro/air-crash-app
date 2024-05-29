import React from "react";
import style from "./FlightListComponent.module.css";
import { IFlight } from "@/interfaces/IFlight.interface";

export interface IFlightComponent {
  flight: IFlight;
  currency: boolean;
  isFavorited: boolean;
  getCurrency: (price: number, currency: boolean) => string;
  updateFavoriteList: (flight: IFlight) => void;
  removeFromFavoriteList: (flight: IFlight) => void;
}
const FlightComponent = ({
  flight,
  currency,
  isFavorited,
  getCurrency,
  updateFavoriteList,
  removeFromFavoriteList,
}: IFlightComponent) => {
  return (
    <div className={style.list}>
      <div className={style.item}>
        <label className={style.label}>ID:</label>
        <span className={style.value}>{flight.id}</span>
      </div>
      <div className={style.item}>
        <label className={style.label}>Price:</label>
        <span className={style.value}>
          {getCurrency(flight.price, currency)}
        </span>
      </div>
      <div className={style.item}>
        <label className={style.label}>Destination:</label>
        <span className={style.value}>{flight.destination}</span>
      </div>
      <div className={style.item}>
        {!isFavorited && (
          <button
            className={style.likeBtn}
            onClick={() => updateFavoriteList(flight)}
          >
            Like
          </button>
        )}
        {isFavorited && (
          <button
            className={style.likeBtn}
            onClick={() => removeFromFavoriteList(flight)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default FlightComponent;
