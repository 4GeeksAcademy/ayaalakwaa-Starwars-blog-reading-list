import React, { useContext } from "react";
import { Card } from "../component/characterCard.js";
import { PlanetCard } from "../component/planetCard.js";
import { VehicleCard } from "../component/vehicleCard.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/card.css";

export const Home = () => {
  const { store } = useContext(Context);
  return (
    <div className="card-group bg-white p-4">
      <h2 className="mainTitle">Characters</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
          {store.character.map((item, index) => {
            return (
              <Card key={index} name={item.name} id={item.uid} item={item} />
            );
          })}
        </div>
      </div>
      <hr />
      <h2 className="mainTitle">Planets</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
          {store.planet.map((item, index) => {
            return (
              <PlanetCard
                key={index}
                name={item.name}
                id={item.uid}
                item={item}
              />
            );
          })}
        </div>
      </div>
      <hr />
      <h2 className="mainTitle">Vehicles</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
          {store.ship.map((item, index) => {
            return (
              <VehicleCard
                key={index}
                name={item.name}
                id={item.uid}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
