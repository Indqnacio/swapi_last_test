import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function TitleSection() {
  return (
    <>
      <div className="title_input" style={{ marginLeft: 0 }}>
        <FontAwesomeIcon className="icon" icon={faFilm} size="2xl" />
        <h2>Peliculas</h2>
      </div>
    </>
  );
}
