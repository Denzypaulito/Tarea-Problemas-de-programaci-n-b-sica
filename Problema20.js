function calcularFactorial(numero) {
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
      factorial *= i;
      i++;
    }
    return factorial;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Por favor ingrese un número: ', valor => {
    const factorial = calcularFactorial(parseInt(valor));
    console.log(`El factorial de ${valor} es: ${factorial}`);
    readline.close();
  });