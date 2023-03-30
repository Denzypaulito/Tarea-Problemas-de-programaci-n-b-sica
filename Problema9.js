const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function verificar() {
    readline.question('Introduce un número: ', respuesta => {
      let num = parseInt(respuesta);
      if (isNaN(num)) {
        console.log("¡Introduce un número válido!");
        verificar();
      } else if (num < 0) {
        console.log(`Tu valor ${num} es negativo`);
        readline.close();
      } else if (num > 0) {
        console.log(`Tu valor ${num} es positivo`);
        readline.close();
      } else {
        console.log("Tu valor es cero");
        readline.close();
      }
    });
  }
  
  verificar();