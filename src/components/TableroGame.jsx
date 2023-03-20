import React, { useEffect, useState } from "react";
import { getMatriz } from "./Logica";

export default function TableroGame({ filas, columnas }) {
  const [matrizTablero, setMatrizTablero] = useState([]);
  useEffect(() => {
    if (filas && columnas && filas + columnas > 1) {
      setMatrizTablero(getMatriz(filas, columnas));
    }
  }, [filas, columnas]);
  return (
    <table className="table table-bordered">
      {matrizTablero.map((filas) => (
        <tr>
          {filas.map((columnas) => (
            <td style={{ background: columnas.viva ? "black" : "white" }} />
          ))}
        </tr>
      ))}
    </table>
  );
}
