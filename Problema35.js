function imprimirMatriz() {
    for (let fila = 0; fila < 5; fila++) {
      let filaNumeros = "";
      for (let col = 0; col < 6; col++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        filaNumeros += numero < 10 ? `  ${numero}` : ` ${numero}`;
      }
      console.log(filaNumeros);
    }
  }
  
  imprimirMatriz();