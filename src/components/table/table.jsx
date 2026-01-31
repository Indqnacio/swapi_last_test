import React, { useState } from "react";
import "./table.scss";
import Pagination from "./pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { resolveChipStyle } from "../../pipe/resolveChipStyle ";

export default function Table({
  columns = [],
  data = [],
  dataPerPage,
  onAction = () => {},
}) {
  const [page, setPage] = useState(1);

  // si no hay datos mostrar mensaje
  if (!data || data.length === 0) {
    return <div className="table_empty">No hay registros.</div>;
  }

  const total = data.length;
  const totalPages = Math.max(1, Math.ceil(total / dataPerPage));
  const start = (page - 1) * dataPerPage;
  const pageData = data.slice(start, start + dataPerPage);

  const handleAction = (row, action) => {
    onAction({ row, action });
  };

  return (
    <div className="tabla_wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((row, rIdx) => (
            <tr key={row._id || rIdx}>
              {columns.map((col) => {
                const value = row[col.key];

                // chips: cada elemento del array se muestra como chip redondo
                if (col.isChip && Array.isArray(value)) {
                  return (
                    <td key={`${col.key}-${row._id || rIdx}`}>
                      <div className="chip_list">
                        {value.map((v, i) => {
                          const style = resolveChipStyle(v, col);
                          return (
                            <span key={i} className="chip" style={style}>
                              {v}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                  );
                }

                if (col.isArray && Array.isArray(value)) {
                  return (
                    <td key={`${col.key}-${row._id || rIdx}`}>
                      {value.join(", ")}
                    </td>
                  );
                }

                if (col.isLink && value) {
                  return (
                    <td key={`${col.key}-${row._id || rIdx}`}>
                      <a href={value} target="_blank" rel="noreferrer">
                        Ver
                      </a>
                    </td>
                  );
                }

                const cell =
                  value !== undefined && value !== null ? String(value) : "-";

                return <td key={`${col.key}-${row._id || rIdx}`}>{cell}</td>;
              })}

              <td className="tabla_actions">
                <button
                  className="action_btn view"
                  title="Ver"
                  onClick={() => handleAction(row, "view")}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>

                <button
                  className="action_btn edit"
                  title="Editar"
                  onClick={() => handleAction(row, "edit")}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>

                <button
                  className="action_btn delete"
                  title="Borrar"
                  onClick={() => handleAction(row, "delete")}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
