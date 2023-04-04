function imprimirMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    for (let fila = 0; fila < filas; fila++) {
      let filaNumeros = "";
      for (let col = 0; col < columnas; col++) {
        filaNumeros += matriz[fila][col] < 10 ? `  ${matriz[fila][col]}` : ` ${matriz[fila][col]}`;
      }
      console.log(filaNumeros);
    }
  }
  
  function transponerMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const matrizTranspuesta = [];
    for (let j = 0; j < columnas; j++) {
      const filaTranspuesta = [];
      for (let i = 0; i < filas; i++) {
        filaTranspuesta.push(matriz[i][j]);
      }
      matrizTranspuesta.push(filaTranspuesta);
    }
    return matrizTranspuesta;
  }
  
  function generarMatrizAleatoria(filas, columnas) {
    const matriz = [];
    for (let fila = 0; fila < filas; fila++) {
      const filaNumeros = [];
      for (let col = 0; col < columnas; col++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        filaNumeros.push(numero);
      }
      matriz.push(filaNumeros);
    }
    return matriz;
  }
  
  const matriz = generarMatrizAleatoria(5, 6);
  
  console.log("***Matriz original:***");
  imprimirMatriz(matriz);
  
  console.log("***Matriz transpuesta:***");
  imprimirMatriz(transponerMatriz(matriz));