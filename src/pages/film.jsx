import TitleSection from "../components/pages/titleSection";
import {
  get_films_by_id,
  get_films_select,
  get_films_paginated,
} from "../services/film";

import { useState, useEffect, useRef } from "react";

export default function Films() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setAllData] = useState([]);
  const [test, setTest] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await get_films_paginated(1);
      dataset(data);
      setAllData(data);
      console.log(data);
    } catch (error) {
      console.log("Aqui mostrarias el mensaje de error");
    } finally {
      setLoading(false);
    }
  };

  async function dataset(data) {
    setAllData(data);
    setTotalRecords(data.length);
    setTest(test + 1);
  }

  return (
    <>
      <TitleSection />
      Este es el componente de Peliculas
    </>
  );
}
