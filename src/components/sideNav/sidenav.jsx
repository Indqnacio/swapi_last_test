import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faUser,
  faCar,
  faRocket,
  faCircleChevronRight,
  faEarthAfrica,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div className="side_nav_container">
        <div className="row_head_sideNav">
          <FontAwesomeIcon icon={faCircleChevronRight} size="xl" />
        </div>
        <Link to="/characters" className="row_sidenav">
          <FontAwesomeIcon icon={faUser} /> {"Personajes"}
        </Link>
        <Link to="/films" className="row_sidenav">
          <FontAwesomeIcon icon={faFilm} /> {"Peliculas "}
        </Link>
        <Link to="/planets" className="row_sidenav">
          <FontAwesomeIcon icon={faEarthAfrica} /> {"Planetas "}
        </Link>
        <Link to="/starships" className="row_sidenav">
          <FontAwesomeIcon icon={faRocket} /> {"Naves Espaciales "}
        </Link>
        <Link to="/vehicles" className="row_sidenav">
          <FontAwesomeIcon icon={faCar} /> {"Vehiculos "}
        </Link>
        <Link to="/species" className="row_sidenav">
          <FontAwesomeIcon icon={faDog} /> {"Especies "}
        </Link>
      </div>
    </>
  );
}
