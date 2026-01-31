import TitleSection from "../components/pages/titleSection";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import CharacterModel from "../models/character";
import Table from "../components/table/table";
import Dialog from "../components/dialog/dialog";

export default function Planets() {
  return (
    <>
      <TitleSection text="Planetas" icon={faEarthAfrica} />
    </>
  );
}
