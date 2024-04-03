import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/card.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-black bg-black p-2 cardStyle">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            width="100"
            height="55"
          />
        </span>
      </Link>

      <div className="ml-auto">
        {
          <button className="btn btn-outline-warning mainTitle nav-item dropdown p-0">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              Favorites {store.favorites.length}
            </a>
            <ul
              className="dropdown-menu p-1"
              id="favorites"
              style={{
                position: "absolute",
                right: "0px",
                left: "auto",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {store.favorites.map((item, index) => (
                <li
                  key={index}
                  className="dropdown-menu-item d-flex justify-content-between"
                >
                  <Link to={item.viewType + item.id} style={{ color: "white" }}>
                    {item.name}
                  </Link>
                  <i
                    className="far fa-times-circle"
                    onClick={() => actions.quitFavorite(item)}
                  />
                </li>
              ))}
            </ul>
          </button>
        }
      </div>
    </nav>
  );
};
