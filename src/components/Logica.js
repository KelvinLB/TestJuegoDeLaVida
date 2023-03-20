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

/**
 *
 * @param {Integer} filas Total de filas de la matriz
 * @param {Integer} columnas Total de columnas de la matriz
 * @param {Integer} matriz Matriz con la configuracion
 * @returns Matriz actualizada con los nuevos estados
 */
export const nuevoEstado = (filas, columnas, matriz) => {
  return Array.from({ length: filas }, (f, y) => {
    return Array.from({ length: columnas }, (c, x) => liveOrDie(y, x, matriz));
  });
};

/**
 *
 * @param {Integer} y posicion de la matriz
 * @param {Integer} x posicion de la matriz
 * @param {Array} matriz matriz de celulas
 * @returns Booleano indicando si vive o muere la celula
 */
const liveOrDie = (y, x, matriz) => {
  let celulasVivasAlrededor = getTotalDeCelulasVivasAlRededor(y, x, matriz);
  //Celula viva : si la celula tiene menos de 2 celular al rededor o mas de 3 muere por soledad o sobrepoblacion
  //Celula muerta : la celula revive si tiene al rededor 3 celulas vivas
  return matriz[y][x]
    ? !(celulasVivasAlrededor - 1 < 2 || celulasVivasAlrededor - 1 > 3)
    : celulasVivasAlrededor === 3;
};

/**
 * Considerar los siguientes casos para contar celulas vivas
 * (-x,-y)(x ,-y)(x+,-y)
 * (-x, y)(x , y)(x+, y)
 * (-x,y+)(x ,y+)(x+,y+)
 * @param {Integer} x posicion de la matriz
 * @param {Integer} y posicion de la matriz
 * @param {Array} matriz matriz de celulas
 * @param {Integer} vidas numero de vidas , por default es 0
 * @returns Total de celulas vivas al rededor
 */
const getTotalDeCelulasVivasAlRededor = (y, x, matriz, vidas = 0) => {
  for (let i_y = -1; i_y <= 1; i_y++) {
    for (let i_x = -1; i_x <= 1; i_x++) {
      try {
        vidas += matriz[y + i_y][x + i_x] ? 1 : 0;
      } catch (e) {}
    }
  }
  return vidas;
};
