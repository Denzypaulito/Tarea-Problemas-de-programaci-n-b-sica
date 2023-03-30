const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Porfavor Ingrese un Valor: ', valor => {
    let i = 3;
    let aux = 0;
    while (i <= valor) {
      console.log(i);
      i = i + 3;
      aux++;
    }
    console.log(`Número de multiplos de 3: ${aux}`);
    readline.close();
  });