import { useEffect, useState } from "react";
import { getMatriz, nuevoEstado } from "./Logica";

import cloneDeep from "lodash/cloneDeep";

export default function TableroGame({ filas, columnas }) {
  const [matrizTablero, setMatrizTablero] = useState([]);
  const [repetirInfinito, setRepetirInfinito] = useState(-1);
  const [detenerEjecucion, setDetenerEjecucion] = useState(false);
  useEffect(() => {
    if (filas && columnas && filas + columnas > 1) {
      setMatrizTablero(getMatriz(filas, columnas));
    }
  }, [filas, columnas]);
  useEffect(() => {
    if (detenerEjecucion) {
      ejecucionNuevoEstado();
      setRepetirInfinito(repetirInfinito + 1);
    }
  }, [repetirInfinito]);

  const ejecucionNuevoEstado = () => {
    setMatrizTablero(nuevoEstado(filas, columnas, matrizTablero));
  };
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
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setDetenerEjecucion(false)}
        >
          Detener
        </button>
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setDetenerEjecucion(true);
            setRepetirInfinito(repetirInfinito + 1);
          }}
        >
          Ejecucion automatica
        </button>
      </div>
      <table className="table table-bordered">
        {matrizTablero.map((filas, i_filas) => (
          <tr>
            {filas.map((columnas, i_columnas) => (
              <td
                style={{ background: columnas ? "black" : "white" }}
                onClick={() => {
                  //Actualizar estado de una celula
                  setMatrizTablero(
                    matrizTablero.map((fila, i_filaUpdate) => {
                      return fila.map((column, i_columUpdate) => {
                        return i_filaUpdate === i_filas &&
                          i_columnas === i_columUpdate
                          ? !column
                          : column;
                      });
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
