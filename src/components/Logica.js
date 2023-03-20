/**
 * Metodo para construir una matriz para las celular del juego
 * @param {Integer} filas Numero total de filas
 * @param {Integer} columnas Numero total de columnas
 * @returns Matriz de booleanos
 */
export const getMatriz = (filas, columnas) => {
  return Array.from({ length: filas }, () => {
    return Array.from({ length: columnas }, () => false);
  });
};
