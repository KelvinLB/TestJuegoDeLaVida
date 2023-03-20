/**
 * Metodo para construir una matriz para las celular del juego
 * @param {Integer} filas Numero total de filas
 * @param {Integer} columnas Numero total de columnas
 * @returns Matriz de booleanos
 */
export const getMatriz = (filas, columnas) => {
  const matriz = [];
  for (let i_filas = 0; i_filas < filas; i_filas++) {
    matriz.push([]);
    const currentFila = matriz[matriz.length - 1];
    for (let i_columnas = 0; i_columnas < columnas; i_columnas++) {
      currentFila.push({ viva: false });
    }
  }
  return matriz;
};
