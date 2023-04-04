const pags = 3;
const filas = 4;
const columnas = 5;

let valor = 1;

for (let pag = 1; pag <= pags; pag++) {
  console.log(`Página ${pag}:`);
  
  for (let fila = 1; fila <= filas; fila++) {
    let filaNumeros = "";
    
    for (let col = 1; col <= columnas; col++) {
      filaNumeros += `${valor}\t`;
      valor++;
    }
    
    console.log(filaNumeros);
  }
  
  console.log("_____________________________________");
}
