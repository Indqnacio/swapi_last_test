import axios from "axios";
const URL = import.meta.env.SWAPIURL || "http://localhost:3000/api/";
const res = "Fallo su conexion a internet comuniquese con el equipo de INDQ, id:";

export const get_characters_paginated = async (page) => {
  try {
    const response = await axios.get(`${URL}characters?page=${page}`);
    return response.data;
  } catch (error) {
    console.error(res + " " + page + " " + error);
    throw error;
  }
};

export const get_films_select = async () => {
  try {
    const response = await axios.get(`${URL}characters/select/`);
    return response.data;
  } catch (error) {
    console.error("hubo un error critico al traer los datos, " + res);
    throw error;
  }
};

export const get_characters_by_id = async (id) => {
  try {
    const response = await axios.get(`${URL}characters/${id}/`);
    return response.data;
  } catch (error) {
    console.error(res + " " + id + " " + error);
    throw error;
  }
};
