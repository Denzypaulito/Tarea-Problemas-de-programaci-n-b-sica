const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce el primer número: ', (num1) => {
    readline.question('Introduce el segundo número: ', (num2) => {
      console.log('Elige la operación que deseas hacer:');
      console.log('1. Sumar');
      console.log('2. Restar');
      console.log('3. Multiplicar');
      console.log('4. Dividir');
  
      readline.question('Introduce una opción: ', (opcion) => {
        let resultado;
  
        switch (opcion) {
          case '1':
            resultado = Number(num1) + Number(num2);
            console.log(`La suma de ${num1} y ${num2} es: ${resultado}`);
            break;
          case '2':
            resultado = num1 - num2;
            console.log(`La resta de ${num1} y ${num2} es: ${resultado}`);
            break;
          case '3':
            resultado = num1 * num2;
            console.log(`La multiplicación de ${num1} y ${num2} es: ${resultado}`);
            break;
          case '4':
            if (num2 == 0) {
              console.log('No se puede dividir por cero');
            } else {
              resultado = num1 / num2;
              console.log(`La división de ${num1} y ${num2} es: ${resultado}`);
            }
            break;
          default:
            console.log('Opción inválida');
            break;
        }
  
        readline.close();
      });
    });
  });