import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PlanetCard = ({ name, id, item }) => {
  const { actions } = useContext(Context);
  const viewType = "planetView/";
  const [detailCard, setDetailCard] = useState();

  useEffect(() => {
    actions
      .fetchDetailPlanets(id)
      .then((detailChar) => setDetailCard(detailChar));
  }, [id]);

  let imageUrl = "";

  if (id === "1") {
    imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtiXRKYkEdMB-Y_0SWEevq7Sfdev2Akpwx7CDgE6COk3038o43DEqh-PVV0Mj1X6RSQk&usqp=CAU";
  } else {
    imageUrl =
      "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg";
  }

  return detailCard !== undefined ? (
    <div className="card mx-1 bg-black text-white cardSize">
      <img src={imageUrl} className="card-img-top" alt="..."></img>
      <div className="card-body mb-0">
        <h5 className="card-title mainTitle">{name}</h5>
        <p className="card-text mb-2">
          Population: {detailCard.properties.population}
        </p>
        <p className="card-text mb-2">
          Terrain: {detailCard.properties.terrain}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between mt-0">
        <Link to={viewType + id} className="btn btn-outline-warning">
          Learn more!
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={() => actions.addFavorite({ name, id, item, viewType })}
        >
          <i className="fa fa-heart" />
        </button>
      </div>
    </div>
  ) : null;
};
