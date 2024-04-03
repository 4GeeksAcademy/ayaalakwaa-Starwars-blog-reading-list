import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/card.css";

export const Card = ({ name, id, item }) => {
  const { store, actions } = useContext(Context);
  const viewType = "/characterview/";
  const [detailCard, setDetailCard] = useState();

  useEffect(() => {
    actions.fetchDetailChar(id).then((detailChar) => setDetailCard(detailChar));
  }, [id]);

  return detailCard !== undefined ? (
    <div className="card mx-1 bg-black text-white cardSize">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          id +
          ".jpg"
        }
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body mb-0">
        <h5 className="card-title mainTitle">{name}</h5>
        <p className="card-text mb-1">
          Gender: {detailCard.properties.gender}{" "}
        </p>
        <p className="card-text mb-1">
          Eye Color: {detailCard.properties.eye_color}{" "}
        </p>
        <p className="card-text mb-1">
          Hair Color: {detailCard.properties.hair_color}{" "}
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
