import TitleSection from "../components/pages/titleSection";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import CharacterModel from "../models/character";
import Table from "../components/table/table";
import Dialog from "../components/dialog/dialog";

export default function Specie() {
  return (
    <>
      <TitleSection text="Especies" icon={faDog} />
    </>
  );
}
