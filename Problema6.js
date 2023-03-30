const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Porfavor Ingrese un Valor: ', valor => {
    let i= 1;
    while (i <= valor) {
      console.log(i);
      i++;
    }
    readline.close();
  });