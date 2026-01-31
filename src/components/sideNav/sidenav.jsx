import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faUser,
  faCar,
  faRocket,
  faCircleChevronRight,
  faEarthAfrica,
  faDog
} from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <>
      <div className="side_nav_container">
        <div className="row_head_sideNav">
          <FontAwesomeIcon icon={faCircleChevronRight} size="xl" />
        </div>
        <div className="row_sidenav">
          {" "}
          <FontAwesomeIcon icon={faUser} /> {"Personajes"}
        </div>
        <div className="row_sidenav">
          <FontAwesomeIcon icon={faFilm} /> {"Peliculas "}
        </div>
        <div className="row_sidenav">
          <FontAwesomeIcon icon={faRocket} /> {"Naves Espaciales "}
        </div>
        <div className="row_sidenav">
          <FontAwesomeIcon icon={faCar} /> {"Vehiculos "}
        </div>
        <div className="row_sidenav">
          <FontAwesomeIcon icon={faEarthAfrica} /> {"Planetas "}
        </div>
        <div className="row_sidenav">
          <FontAwesomeIcon icon={faDog} /> {"Planetas "}
        </div>
      </div>
    </>
  );
}
