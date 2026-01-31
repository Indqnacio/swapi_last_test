import TitleSection from "../components/pages/titleSection";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
//import DeleteDialog from "../components/dialog/delete";

import {
  // get_films_by_id,
  //get_films_select,
  get_films_paginated,
} from "../services/film";

import {
  useState,
  useEffect,
  //useRef
} from "react";
import Table from "../components/table/table";
import FilmModel from "../models/film";
import Dialog from "../components/dialog/dialog";

export default function Films() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setAllData] = useState([]);
  const [test, setTest] = useState(0);
  const [dialogType, setDialogType] = useState(null); // 'view' | 'edit' | 'delete'

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
      console.log("Aqui mostrarias el mensaje de error" + error);
    } finally {
      setLoading(false);
    }
  };

  const handleTableAction = ({ row, action }) => {
    setSelectedRow(row);
    setDialogType(action); // view | edit | delete
    setDialogOpen(true);
  };

  async function dataset(data) {
    setAllData(data);
    setTotalRecords(data.length);
    setTest(test + 1);
  }

  return (
    <>
      <TitleSection text="Peliculas" icon={faFilm} />
      <div className="page-section">
        <h2>Aqui van los botones</h2>
        <Table
          columns={FilmModel.columns}
          data={data}
          onAction={handleTableAction}
          dataPerPage={10}
        />
        <Dialog
          open={dialogOpen}
          title={
            dialogMode === "view"
              ? "Detalle de película"
              : dialogMode === "edit"
                ? "Editar película"
                : dialogMode === "delete"
                  ? "Eliminar película"
                  : ""
          }
          onClose={() => setDialogOpen(false)}
        >
          {dialogMode === "view" && (
            <div>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {JSON.stringify(selectedRow, null, 2)}
              </pre>
            </div>
          )}

          {dialogMode === "edit" && (
            <div>
              <p>AQUI USAREMOS FORMIK Y YUP</p>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {JSON.stringify(selectedRow, null, 2)}
              </pre>
            </div>
          )}

          {dialogMode === "delete" && (
            <div>
              <p>
                ¿Estas seguro que deseas eliminar este registro con nombre{" "}
                <strong>"{selectedRow.title}"</strong> ?
              </p>
              <div
                style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
              >
                <button
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    /* TODO: call delete API */ setDialogOpen(false);
                  }}
                  style={{ background: "var(--color-botones)", color: "#fff" }}
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}
        </Dialog>
        
      </div>
    </>
  );
}
