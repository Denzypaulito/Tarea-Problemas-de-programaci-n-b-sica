function imprimirNumeros() {
    for (let fila = 0; fila < 10; fila++) {
      let filaNumeros = "";
      for (let col = 0; col < 10; col++) {
        const numero = fila * 10 + col;
        filaNumeros += numero < 10 ? `  ${numero}` : ` ${numero}`;
      }
      console.log(filaNumeros);
    }
  }
  
  imprimirNumeros();