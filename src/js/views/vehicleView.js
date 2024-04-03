import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/card.css";

export const Vehicleview = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(
    () => actions.fetchVehData(params.theid),
    [store.shipData],
    [store.shipDesc]
  );

  return (
    <div className="cardBack d-flex flex-column flex-md-row h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/vehicles/" +
          params.theid +
          ".jpg"
        }
        className="card-img-left border border-light border rounded mr-md-4 mb-4 mb-md-0"
        alt="..."
      ></img>
      <div className="p-4 textCard">
        <h4 className="mainTitle">{store.shipData.name}</h4>
        <p>{store.shipDesc}</p>
        <hr className="my-4" />
        <h6>
          <u>Data</u>
        </h6>
        <ul className="list-group list-group-horizontal-md flex-wrap text-center">
          <li className="list-group-item bg-dark border border-warning textCard">
            Model:<br></br>
            {store.shipData.model}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Class:<br></br>
            {store.shipData.vehicle_class}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Manufacturer:<br></br>
            {store.shipData.manufacturer}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Length:<br></br>
            {store.shipData.length}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Crew:<br></br>
            {store.shipData.crew}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Max Speed:<br></br>
            {store.shipData.max_atmosphering_speed}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Passengers:<br></br>
            {store.shipData.passengers}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Consumables:<br></br>
            {store.shipData.consumables}
          </li>
        </ul>
        <hr className="my-4" />

        <Link to="/">
          <span className="btn btn-outline-warning" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

Vehicleview.propTypes = {
  match: PropTypes.object,
};
