function sumarPares(numero) {
    let suma = 0;
    let i = 0;
    while (i <= numero) {
      if (i % 2 === 0){
        suma += i;
      }
      i++;
    }
    return suma;
  }
  
  function sumarImpares(numero) {
    let suma = 0;
    let i = 0;
    while (i <= numero) {
      if (i % 2 !== 0){
        suma += i;
      }
      i++;
    }
    return suma;
  }
  
  function main() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log("*****SUMAS DEL 1 AL 1000*****");
    console.log("Suma de Valores Pares (1)");
    console.log("Suma de Valores Impares (2)");
    readline.question('Por favor ingresa una opción: ', valor => {
      if (valor === '1') {
        const suma = sumarPares(1000);
        console.log(`La suma de valores pares es: ${suma}`);
      } else if (valor === '2') {
        const suma = sumarImpares(1000);
        console.log(`La suma de valores impares es: ${suma}`);
      } else {
        console.log("Opción inválida. Introduce 1 o 2.");
        main();
        return;
      }
      readline.close();
    });
  }
  
  main();



