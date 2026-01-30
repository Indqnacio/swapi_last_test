import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (<>
  <div className="search_input">
    <FontAwesomeIcon  icon={faMagnifyingGlass} size="lg"/>
   <p>Búsqueda</p>
  </div>
  </>);
}
