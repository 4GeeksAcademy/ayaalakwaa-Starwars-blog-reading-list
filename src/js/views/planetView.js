import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/card.css";

export const PlanetView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let imageUrl = "";

  if (params.theid === "1") {
    imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtiXRKYkEdMB-Y_0SWEevq7Sfdev2Akpwx7CDgE6COk3038o43DEqh-PVV0Mj1X6RSQk&usqp=CAU";
  } else {
    imageUrl =
      "https://starwars-visualguide.com/assets/img/planets/" +
      params.theid +
      ".jpg";
  }

  useEffect(
    () => actions.fetchPlanetsData(params.theid),
    [store.planetData],
    [store.planetDesc]
  );

  return (
    <div className="cardBack d-flex flex-column flex-md-row h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={imageUrl}
        className="card-img-left border border-light border rounded mr-md-4 mb-4 mb-md-0"
        alt="..."
      ></img>
      <div className="p-4 textCard">
        <h4 className="mainTitle">{store.planetData.name}</h4>
        <p>{store.planetDesc}</p>
        <hr className="my-4" />
        <h6>
          <u>Data</u>
        </h6>
        <ul className="list-group list-group-horizontal-md flex-wrap text-center">
          <li className="list-group-item bg-dark border border-warning textCard">
            Diameter:<br></br>
            {store.planetData.diameter}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Rotation Period:<br></br>
            {store.planetData.rotation_period}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Orbital Period:<br></br>
            {store.planetData.orbital_period}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Gravity:<br></br>
            {store.planetData.gravity}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Population:<br></br>
            {store.planetData.population}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Climate:<br></br>
            {store.planetData.climate}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Terrain:<br></br>
            {store.planetData.terrain}
          </li>
          <li className="list-group-item bg-dark border border-warning textCard">
            Surface Water:<br></br>
            {store.planetData.surface_water}
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

PlanetView.propTypes = {
  match: PropTypes.object,
};
