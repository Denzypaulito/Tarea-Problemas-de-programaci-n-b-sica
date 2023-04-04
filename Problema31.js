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

  function calcularFactorial(numero) {
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
      factorial *= i;
      i++;
    }
    return factorial;
  }

  function multiplica(num){
    let aux = 0;
    console.log("*****Tablas de Multiplicar*****")
      for (let i = 1; i < 11; i++) {
        aux = num * i;
        console.log(`${num} * ${i} = ${aux}`);
      }
      readline.close();
    };



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce un valor: ', (num) => {
      console.log('Elige la operación que deseas hacer:');
      console.log('1. Comprobar si es primo');
      console.log('2. Hallar su factorial');
      console.log('3. Tabla de Multiplicar');
  
      readline.question('Introduce una opción: ', (opcion) => {
        let resultado;
        switch (opcion) {
          case '1':
            if (esPrimo(num) === false){
                console.log("El Número introducido no es Primo");
            }
            if (esPrimo(num) === true){
                console.log("El Número introducido es Primo");
            }
            readline.close();
            break;
          case '2':
            const factorial = calcularFactorial(parseInt(num));
            console.log(`El factorial de ${num} es: ${factorial}`);
            readline.close();
            break;
          case '3':
            multiplica(num);
            readline.close();
            break;
        }
        readline.close();
      });
    });