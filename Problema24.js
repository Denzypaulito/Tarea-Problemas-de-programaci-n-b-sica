function esPrimo(numero) {
    let divisor = 2;
    while (divisor < numero) {
      if (numero % divisor === 0) {
        return false; 
      }
      divisor++;
    }
    return true; 
  }

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Porfavor Ingrese un Valor: ', valor => {
    if (esPrimo(valor) === false){
        console.log("El Número introducido no es primo");
    }
    if (esPrimo(valor) === true){
        console.log("El Número introducido es primo");
    }
    readline.close();
  });