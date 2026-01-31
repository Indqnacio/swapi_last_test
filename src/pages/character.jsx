import TitleSection from "../components/pages/titleSection";
import { get_characters_paginated } from "../services/character";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import { useState, useEffect } from "react";
import CharacterModel from "../models/character";
import Table from "../components/table/table";
import Dialog from "../components/dialog/dialog";

export default function Characters() {
  return (
    <>
      <TitleSection text= "Personajes" icon= {faUser} />
    </>
  );
}
