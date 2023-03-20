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
    <div
      className="d-flex flex-column p-20"
      style={{
        rowGap: 10,
      }}
    >
      <div class="d-flex justify-content-center" style={{ columnGap: 10 }}>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => setMatrizTablero(getMatriz(filas, columnas))}
        >
          Limpiar Tablero
        </button>
        <button type="button" class="btn btn-success">
          Iniciar
        </button>
      </div>
      <table className="table table-bordered">
        {matrizTablero.map((filas, i_filas) => (
          <tr>
            {filas.map((columnas, i_columnas) => (
              <td
                style={{ background: columnas.viva ? "black" : "white" }}
                onClick={() => {
                  //Actualizar estado de una celula
                  setMatrizTablero(
                    matrizTablero.map((fila, i_filaUpdate) => {
                      if (i_filaUpdate === i_filas) {
                        fila[i_columnas].viva = !fila[i_columnas].viva;
                        return fila;
                      }
                      return fila;
                    })
                  );
                }}
              />
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
