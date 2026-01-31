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

export default function TitleSection({text,icon}) {
  return (
    <>
      <div className="title_input" style={{ marginLeft: 0 }}>
        <FontAwesomeIcon className="icon" icon={icon} size="2xl" />
        <h2>{text}</h2>
      </div>
      
    </>
  );
}
